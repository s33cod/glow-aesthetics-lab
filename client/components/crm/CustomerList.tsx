import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Eye,
  Edit,
  MessageSquare,
} from "lucide-react";
import type { Customer } from "../../../server/db/schema";

interface CustomerListProps {
  customers: Customer[];
  onSelectCustomer: (customer: Customer) => void;
}

export function CustomerList({
  customers,
  onSelectCustomer,
}: CustomerListProps) {
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

  const getLeadSourceIcon = (source: string) => {
    switch (source) {
      case "instagram":
      case "facebook":
      case "social_media":
        return "📱";
      case "website":
        return "🌐";
      case "referral":
        return "👥";
      case "advertisement":
        return "📢";
      case "google":
        return "🔍";
      default:
        return "📝";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            Customers ({customers.length})
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Lead Source</TableHead>
                <TableHead>Interests</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">
                        {customer.firstName} {customer.lastName}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {customer.tags.length > 0 && (
                          <div className="flex gap-1 mt-1">
                            {customer.tags.slice(0, 2).map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {customer.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{customer.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="h-3 w-3 mr-1" />
                        {customer.email}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Phone className="h-3 w-3 mr-1" />
                        {customer.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={getStatusColor(customer.status)}
                      variant="secondary"
                    >
                      {customer.status.replace("_", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="mr-2">
                        {getLeadSourceIcon(customer.leadSource)}
                      </span>
                      <span className="text-sm capitalize">
                        {customer.leadSource.replace("_", " ")}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {customer.interestedTreatments.length > 0 ? (
                        <div className="space-y-1">
                          {customer.interestedTreatments
                            .slice(0, 2)
                            .map((treatment, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs mr-1"
                              >
                                {treatment}
                              </Badge>
                            ))}
                          {customer.interestedTreatments.length > 2 && (
                            <div className="text-xs text-muted-foreground">
                              +{customer.interestedTreatments.length - 2} more
                            </div>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">
                          None specified
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {customer.lastContactDate ? (
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(
                            customer.lastContactDate,
                          ).toLocaleDateString()}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">Never</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onSelectCustomer(customer)}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {customers.length === 0 && (
            <div className="text-center py-12">
              <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No customers found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
