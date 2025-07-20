import { z } from "zod";

// Customer/Lead Schema
export const CustomerSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  dateOfBirth: z.string().optional(),
  address: z
    .object({
      street: z.string().optional(),
      city: z.string().optional(),
      postcode: z.string().optional(),
      country: z.string().default("UK"),
    })
    .optional(),

  // Marketing preferences
  marketingConsent: z.boolean().default(false),
  emailConsent: z.boolean().default(false),
  smsConsent: z.boolean().default(false),

  // Lead information
  leadSource: z
    .enum([
      "website",
      "social_media",
      "referral",
      "advertisement",
      "walk_in",
      "google",
      "instagram",
      "facebook",
      "other",
    ])
    .default("website"),

  // Customer status
  status: z
    .enum(["lead", "prospect", "active_customer", "past_customer", "inactive"])
    .default("lead"),

  // Interests and preferences
  interestedTreatments: z.array(z.string()).default([]),
  budget: z
    .enum(["under_500", "500_1000", "1000_2500", "2500_5000", "5000_plus"])
    .optional(),

  // Tracking
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  lastContactDate: z.string().datetime().optional(),
  nextFollowUpDate: z.string().datetime().optional(),

  // Notes and tags
  notes: z.string().optional(),
  tags: z.array(z.string()).default([]),

  // Analytics
  websiteVisits: z.number().default(0),
  pageViews: z
    .array(
      z.object({
        page: z.string(),
        timestamp: z.string().datetime(),
        duration: z.number().optional(),
      }),
    )
    .default([]),
});

// Appointment/Booking Schema
export const AppointmentSchema = z.object({
  id: z.string().uuid(),
  customerId: z.string().uuid(),
  treatmentType: z.string(),
  appointmentDate: z.string().datetime(),
  duration: z.number(), // in minutes
  status: z
    .enum([
      "scheduled",
      "confirmed",
      "in_progress",
      "completed",
      "cancelled",
      "no_show",
    ])
    .default("scheduled"),
  price: z.number(),
  paymentStatus: z
    .enum(["pending", "paid", "partial", "refunded"])
    .default("pending"),
  notes: z.string().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

// Communication/Interaction Schema
export const InteractionSchema = z.object({
  id: z.string().uuid(),
  customerId: z.string().uuid(),
  type: z.enum([
    "email",
    "phone_call",
    "sms",
    "in_person",
    "website_form",
    "social_media",
    "consultation",
    "treatment",
  ]),
  direction: z.enum(["inbound", "outbound"]),
  subject: z.string().optional(),
  content: z.string(),
  timestamp: z.string().datetime(),
  staffMember: z.string().optional(),
  outcome: z.string().optional(),
  followUpRequired: z.boolean().default(false),
  followUpDate: z.string().datetime().optional(),
});

// Marketing Campaign Schema
export const CampaignSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  type: z.enum(["email", "sms", "social_media", "advertisement"]),
  status: z.enum(["draft", "active", "paused", "completed"]),
  targetSegment: z.object({
    treatmentInterests: z.array(z.string()).optional(),
    customerStatus: z.array(z.string()).optional(),
    lastVisitDays: z.number().optional(),
    ageRange: z
      .object({
        min: z.number().optional(),
        max: z.number().optional(),
      })
      .optional(),
  }),
  content: z.object({
    subject: z.string().optional(),
    body: z.string(),
    ctaText: z.string().optional(),
    ctaLink: z.string().optional(),
  }),
  scheduledDate: z.string().datetime().optional(),
  sentDate: z.string().datetime().optional(),
  stats: z
    .object({
      sent: z.number().default(0),
      delivered: z.number().default(0),
      opened: z.number().default(0),
      clicked: z.number().default(0),
      conversions: z.number().default(0),
    })
    .default({}),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

// Analytics Schema
export const AnalyticsSchema = z.object({
  id: z.string().uuid(),
  date: z.string(),
  metrics: z.object({
    newLeads: z.number().default(0),
    websiteVisitors: z.number().default(0),
    bookingConversions: z.number().default(0),
    emailOpens: z.number().default(0),
    emailClicks: z.number().default(0),
    socialMediaEngagement: z.number().default(0),
    revenue: z.number().default(0),
    appointmentsCompleted: z.number().default(0),
  }),
  createdAt: z.string().datetime(),
});

// Type exports
export type Customer = z.infer<typeof CustomerSchema>;
export type Appointment = z.infer<typeof AppointmentSchema>;
export type Interaction = z.infer<typeof InteractionSchema>;
export type Campaign = z.infer<typeof CampaignSchema>;
export type Analytics = z.infer<typeof AnalyticsSchema>;

// Input schemas for forms
export const CreateCustomerSchema = CustomerSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateCustomerSchema = CreateCustomerSchema.partial();

export const CreateAppointmentSchema = AppointmentSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const CreateInteractionSchema = InteractionSchema.omit({
  id: true,
  timestamp: true,
});

export const CreateCampaignSchema = CampaignSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  stats: true,
});
