import { v4 as uuidv4 } from "uuid";
import type {
  Customer,
  Appointment,
  Interaction,
  Campaign,
  Analytics,
} from "./schema";

// In-memory database (in production, this would be a real database)
class CRMDatabase {
  private customers: Map<string, Customer> = new Map();
  private appointments: Map<string, Appointment> = new Map();
  private interactions: Map<string, Interaction> = new Map();
  private campaigns: Map<string, Campaign> = new Map();
  private analytics: Map<string, Analytics> = new Map();

  constructor() {
    this.seedData();
  }

  // Customer methods
  createCustomer(
    data: Omit<Customer, "id" | "createdAt" | "updatedAt">,
  ): Customer {
    const customer: Customer = {
      ...data,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.customers.set(customer.id, customer);
    return customer;
  }

  getCustomer(id: string): Customer | undefined {
    return this.customers.get(id);
  }

  getAllCustomers(): Customer[] {
    return Array.from(this.customers.values());
  }

  updateCustomer(id: string, updates: Partial<Customer>): Customer | null {
    const customer = this.customers.get(id);
    if (!customer) return null;

    const updatedCustomer = {
      ...customer,
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    this.customers.set(id, updatedCustomer);
    return updatedCustomer;
  }

  deleteCustomer(id: string): boolean {
    return this.customers.delete(id);
  }

  searchCustomers(query: string): Customer[] {
    const searchTerm = query.toLowerCase();
    return Array.from(this.customers.values()).filter(
      (customer) =>
        customer.firstName.toLowerCase().includes(searchTerm) ||
        customer.lastName.toLowerCase().includes(searchTerm) ||
        customer.email.toLowerCase().includes(searchTerm) ||
        customer.phone.includes(searchTerm),
    );
  }

  getCustomersBySegment(segment: {
    status?: string[];
    treatmentInterests?: string[];
    leadSource?: string[];
  }): Customer[] {
    return Array.from(this.customers.values()).filter((customer) => {
      if (segment.status && !segment.status.includes(customer.status)) {
        return false;
      }
      if (
        segment.treatmentInterests &&
        !segment.treatmentInterests.some((treatment) =>
          customer.interestedTreatments.includes(treatment),
        )
      ) {
        return false;
      }
      if (
        segment.leadSource &&
        !segment.leadSource.includes(customer.leadSource)
      ) {
        return false;
      }
      return true;
    });
  }

  // Appointment methods
  createAppointment(
    data: Omit<Appointment, "id" | "createdAt" | "updatedAt">,
  ): Appointment {
    const appointment: Appointment = {
      ...data,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.appointments.set(appointment.id, appointment);
    return appointment;
  }

  getCustomerAppointments(customerId: string): Appointment[] {
    return Array.from(this.appointments.values()).filter(
      (apt) => apt.customerId === customerId,
    );
  }

  getAllAppointments(): Appointment[] {
    return Array.from(this.appointments.values());
  }

  updateAppointment(
    id: string,
    updates: Partial<Appointment>,
  ): Appointment | null {
    const appointment = this.appointments.get(id);
    if (!appointment) return null;

    const updatedAppointment = {
      ...appointment,
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    this.appointments.set(id, updatedAppointment);
    return updatedAppointment;
  }

  // Interaction methods
  createInteraction(data: Omit<Interaction, "id" | "timestamp">): Interaction {
    const interaction: Interaction = {
      ...data,
      id: uuidv4(),
      timestamp: new Date().toISOString(),
    };

    this.interactions.set(interaction.id, interaction);
    return interaction;
  }

  getCustomerInteractions(customerId: string): Interaction[] {
    return Array.from(this.interactions.values())
      .filter((interaction) => interaction.customerId === customerId)
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      );
  }

  getAllInteractions(): Interaction[] {
    return Array.from(this.interactions.values()).sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    );
  }

  // Campaign methods
  createCampaign(
    data: Omit<Campaign, "id" | "createdAt" | "updatedAt" | "stats">,
  ): Campaign {
    const campaign: Campaign = {
      ...data,
      id: uuidv4(),
      stats: {
        sent: 0,
        delivered: 0,
        opened: 0,
        clicked: 0,
        conversions: 0,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.campaigns.set(campaign.id, campaign);
    return campaign;
  }

  getAllCampaigns(): Campaign[] {
    return Array.from(this.campaigns.values());
  }

  updateCampaign(id: string, updates: Partial<Campaign>): Campaign | null {
    const campaign = this.campaigns.get(id);
    if (!campaign) return null;

    const updatedCampaign = {
      ...campaign,
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    this.campaigns.set(id, updatedCampaign);
    return updatedCampaign;
  }

  // Analytics methods
  getDashboardStats() {
    const customers = Array.from(this.customers.values());
    const appointments = Array.from(this.appointments.values());
    const interactions = Array.from(this.interactions.values());

    const now = new Date();
    const lastMonth = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate(),
    );

    return {
      totalCustomers: customers.length,
      newCustomersThisMonth: customers.filter(
        (c) => new Date(c.createdAt) > lastMonth,
      ).length,
      totalAppointments: appointments.length,
      upcomingAppointments: appointments.filter(
        (a) => new Date(a.appointmentDate) > now && a.status === "scheduled",
      ).length,
      totalRevenue: appointments
        .filter((a) => a.status === "completed")
        .reduce((sum, a) => sum + a.price, 0),
      conversionRate:
        customers.length > 0
          ? (
              (customers.filter((c) => c.status === "active_customer").length /
                customers.length) *
              100
            ).toFixed(1)
          : "0",
      leadSources: this.getLeadSourceStats(),
      treatmentInterests: this.getTreatmentInterestStats(),
      recentActivity: interactions.slice(0, 10),
    };
  }

  private getLeadSourceStats() {
    const customers = Array.from(this.customers.values());
    const sources: Record<string, number> = {};

    customers.forEach((customer) => {
      sources[customer.leadSource] = (sources[customer.leadSource] || 0) + 1;
    });

    return Object.entries(sources).map(([source, count]) => ({
      source,
      count,
    }));
  }

  private getTreatmentInterestStats() {
    const customers = Array.from(this.customers.values());
    const interests: Record<string, number> = {};

    customers.forEach((customer) => {
      customer.interestedTreatments.forEach((treatment) => {
        interests[treatment] = (interests[treatment] || 0) + 1;
      });
    });

    return Object.entries(interests).map(([treatment, count]) => ({
      treatment,
      count,
    }));
  }

  // Seed some sample data
  private seedData() {
    // Sample customers
    const sampleCustomers = [
      {
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarah.johnson@email.com",
        phone: "+447700123456",
        leadSource: "instagram" as const,
        status: "active_customer" as const,
        interestedTreatments: ["Botox", "Dermal Fillers"],
        marketingConsent: true,
        emailConsent: true,
        smsConsent: false,
        websiteVisits: 5,
        pageViews: [
          {
            page: "/treatments",
            timestamp: new Date().toISOString(),
            duration: 120,
          },
        ],
        tags: ["high_value", "referral_potential"],
        notes:
          "Very satisfied with previous treatments. Interested in package deals.",
      },
      {
        firstName: "Emma",
        lastName: "Wilson",
        email: "emma.wilson@email.com",
        phone: "+447700234567",
        leadSource: "website" as const,
        status: "prospect" as const,
        interestedTreatments: ["Chemical Peel", "Microneedling"],
        marketingConsent: true,
        emailConsent: true,
        smsConsent: true,
        websiteVisits: 3,
        pageViews: [],
        tags: ["first_time_visitor"],
        notes:
          "Showed interest in skin rejuvenation treatments during consultation.",
      },
      {
        firstName: "Lisa",
        lastName: "Thompson",
        email: "lisa.thompson@email.com",
        phone: "+447700345678",
        leadSource: "referral" as const,
        status: "lead" as const,
        interestedTreatments: ["Laser Hair Removal"],
        marketingConsent: false,
        emailConsent: false,
        smsConsent: false,
        websiteVisits: 1,
        pageViews: [],
        tags: ["needs_follow_up"],
        notes:
          "Referred by Sarah Johnson. Hesitant about treatment, needs more information.",
      },
    ];

    sampleCustomers.forEach((customer) => {
      this.createCustomer(customer);
    });

    // Sample interactions
    const customers = Array.from(this.customers.values());
    if (customers.length > 0) {
      this.createInteraction({
        customerId: customers[0].id,
        type: "consultation",
        direction: "inbound",
        content:
          "Initial consultation for Botox treatment. Customer very satisfied.",
        staffMember: "Olivene D",
        outcome: "Booking scheduled",
        followUpRequired: false,
      });

      this.createInteraction({
        customerId: customers[1].id,
        type: "email",
        direction: "outbound",
        subject: "Follow-up on your consultation",
        content:
          "Thank you for visiting our clinic. Here's more information about our chemical peel treatments.",
        staffMember: "Olivene D",
        outcome: "Email sent",
        followUpRequired: true,
        followUpDate: new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000,
        ).toISOString(),
      });
    }
  }
}

// Export singleton instance
export const crmDatabase = new CRMDatabase();
