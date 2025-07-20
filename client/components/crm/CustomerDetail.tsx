import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Edit,
  Save,
  X,
  MessageSquare,
  Star,
  Clock,
  Activity,
  Target,
  Tag,
  Plus,
} from "lucide-react";
import type {
  Customer,
  Appointment,
  Interaction,
} from "../../../server/db/schema";

interface CustomerDetailProps {
  customer: Customer;
  onBack: () => void;
  onUpdate: () => void;
}

interface CustomerData {
  customer: Customer;
  appointments: Appointment[];
  interactions: Interaction[];
}

export function CustomerDetail({
  customer,
  onBack,
  onUpdate,
}: CustomerDetailProps) {
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState(customer);
  const [newInteraction, setNewInteraction] = useState({
    type: "email",
    direction: "outbound",
    subject: "",
    content: "",
    outcome: "",
    followUpRequired: false,
  });

  useEffect(() => {
    fetchCustomerDetails();
  }, [customer.id]);

  const fetchCustomerDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/crm/customers/${customer.id}`);
      const data = await response.json();

      if (data.success) {
        setCustomerData(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch customer details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/crm/customers/${customer.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editForm),
      });

      if (response.ok) {
        setEditing(false);
        onUpdate();
        fetchCustomerDetails();
      }
    } catch (error) {
      console.error("Failed to update customer:", error);
    }
  };

  const handleAddInteraction = async () => {
    try {
      const response = await fetch("/api/crm/interactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId: customer.id,
          ...newInteraction,
        }),
      });

      if (response.ok) {
        setNewInteraction({
          type: "email",
          direction: "outbound",
          subject: "",
          content: "",
          outcome: "",
          followUpRequired: false,
        });
        fetchCustomerDetails();
      }
    } catch (error) {
      console.error("Failed to add interaction:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "lead":
        return "bg-yellow-100 text-yellow-800";
      case "prospect":
        return "bg-blue-100 text-blue-800";
      case "active_customer":
        return "bg-green-100 text-green-800";
      case "past_customer":
        return "bg-gray-100 text-gray-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getInteractionIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4" />;
      case "phone_call":
        return <Phone className="h-4 w-4" />;
      case "sms":
        return <MessageSquare className="h-4 w-4" />;
      case "consultation":
      case "treatment":
        return <Star className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (!customerData) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">
            Failed to load customer details
          </p>
          <Button onClick={onBack} className="mt-4">
            Back to list
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Customers
        </Button>
        <div className="flex items-center space-x-2">
          {editing ? (
            <>
              <Button variant="outline" onClick={() => setEditing(false)}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={() => setEditing(true)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Customer
            </Button>
          )}
        </div>
      </div>

      {/* Customer Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Customer Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {editing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={editForm.firstName}
                      onChange={(e) =>
                        setEditForm({ ...editForm, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={editForm.lastName}
                      onChange={(e) =>
                        setEditForm({ ...editForm, lastName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={editForm.email}
                      onChange={(e) =>
                        setEditForm({ ...editForm, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={editForm.phone}
                      onChange={(e) =>
                        setEditForm({ ...editForm, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={editForm.status}
                      onValueChange={(value: any) =>
                        setEditForm({ ...editForm, status: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lead">Lead</SelectItem>
                        <SelectItem value="prospect">Prospect</SelectItem>
                        <SelectItem value="active_customer">
                          Active Customer
                        </SelectItem>
                        <SelectItem value="past_customer">
                          Past Customer
                        </SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="leadSource">Lead Source</Label>
                    <Select
                      value={editForm.leadSource}
                      onValueChange={(value: any) =>
                        setEditForm({ ...editForm, leadSource: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="social_media">
                          Social Media
                        </SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="advertisement">
                          Advertisement
                        </SelectItem>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={editForm.notes || ""}
                      onChange={(e) =>
                        setEditForm({ ...editForm, notes: e.target.value })
                      }
                      rows={3}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">
                      {customerData.customer.firstName}{" "}
                      {customerData.customer.lastName}
                    </h2>
                    <Badge
                      className={getStatusColor(customerData.customer.status)}
                      variant="secondary"
                    >
                      {customerData.customer.status.replace("_", " ")}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{customerData.customer.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{customerData.customer.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="capitalize">
                        {customerData.customer.leadSource.replace("_", " ")}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        Joined{" "}
                        {new Date(
                          customerData.customer.createdAt,
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {customerData.customer.interestedTreatments.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">
                        Interested Treatments
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {customerData.customer.interestedTreatments.map(
                          (treatment, index) => (
                            <Badge key={index} variant="outline">
                              {treatment}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {customerData.customer.tags.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {customerData.customer.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {customerData.customer.notes && (
                    <div>
                      <h4 className="font-medium mb-2">Notes</h4>
                      <p className="text-muted-foreground bg-muted p-3 rounded">
                        {customerData.customer.notes}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Website Visits</span>
                <span className="font-medium">
                  {customerData.customer.websiteVisits}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Appointments</span>
                <span className="font-medium">
                  {customerData.appointments.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Interactions</span>
                <span className="font-medium">
                  {customerData.interactions.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Revenue</span>
                <span className="font-medium">
                  £
                  {customerData.appointments
                    .filter((apt) => apt.status === "completed")
                    .reduce((sum, apt) => sum + apt.price, 0)
                    .toLocaleString()}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Marketing Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Marketing Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Email Marketing</span>
                <Badge
                  variant={
                    customerData.customer.emailConsent ? "default" : "secondary"
                  }
                >
                  {customerData.customer.emailConsent ? "Yes" : "No"}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">SMS Marketing</span>
                <Badge
                  variant={
                    customerData.customer.smsConsent ? "default" : "secondary"
                  }
                >
                  {customerData.customer.smsConsent ? "Yes" : "No"}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">General Marketing</span>
                <Badge
                  variant={
                    customerData.customer.marketingConsent
                      ? "default"
                      : "secondary"
                  }
                >
                  {customerData.customer.marketingConsent ? "Yes" : "No"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactions Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Interaction History ({customerData.interactions.length})
            </div>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Interaction
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customerData.interactions.map((interaction, index) => (
              <div
                key={interaction.id}
                className="flex items-start space-x-4 p-4 border rounded-lg"
              >
                <div className="flex-shrink-0">
                  {getInteractionIcon(interaction.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium capitalize">
                      {interaction.type.replace("_", " ")} -{" "}
                      {interaction.direction}
                    </h4>
                    <time className="text-xs text-muted-foreground">
                      {new Date(interaction.timestamp).toLocaleString()}
                    </time>
                  </div>
                  {interaction.subject && (
                    <p className="text-sm text-muted-foreground mb-1">
                      {interaction.subject}
                    </p>
                  )}
                  <p className="text-sm">{interaction.content}</p>
                  {interaction.outcome && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Outcome: {interaction.outcome}
                    </p>
                  )}
                  {interaction.followUpRequired && (
                    <Badge variant="outline" className="mt-2">
                      <Clock className="h-3 w-3 mr-1" />
                      Follow-up required
                    </Badge>
                  )}
                </div>
              </div>
            ))}

            {customerData.interactions.length === 0 && (
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No interactions yet
                </h3>
                <p className="text-muted-foreground">
                  Start tracking customer communications and activities
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Appointments */}
      {customerData.appointments.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Appointment History ({customerData.appointments.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customerData.appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <h4 className="font-medium">{appointment.treatmentType}</h4>
                    <p className="text-sm text-muted-foreground">
                      {new Date(appointment.appointmentDate).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        appointment.status === "completed"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {appointment.status}
                    </Badge>
                    <p className="text-sm font-medium mt-1">
                      £{appointment.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
