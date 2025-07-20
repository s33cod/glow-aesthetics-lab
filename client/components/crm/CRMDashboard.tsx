import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Calendar,
  TrendingUp,
  Mail,
  Phone,
  Target,
  DollarSign,
  UserPlus,
  MessageSquare,
  BarChart3,
  Filter,
  Search,
  Plus,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CustomerList } from "./CustomerList";
import { CustomerDetail } from "./CustomerDetail";
import { CampaignManager } from "./CampaignManager";
import { AnalyticsView } from "./AnalyticsView";
import type { Customer } from "../../../server/db/schema";

interface DashboardStats {
  totalCustomers: number;
  newCustomersThisMonth: number;
  totalAppointments: number;
  upcomingAppointments: number;
  totalRevenue: number;
  conversionRate: string;
  leadSources: { source: string; count: number }[];
  treatmentInterests: { treatment: string; count: number }[];
  recentActivity: any[];
}

export function CRMDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null,
  );
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [statsResponse, customersResponse] = await Promise.all([
        fetch("/api/crm/analytics/dashboard"),
        fetch("/api/crm/customers"),
      ]);

      const statsData = await statsResponse.json();
      const customersData = await customersResponse.json();

      if (statsData.success) {
        setStats(statsData.data);
      }

      if (customersData.success) {
        setCustomers(customersData.data);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      searchTerm === "" ||
      customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "" || customer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading CRM Dashboard...</p>
        </div>
      </div>
    );
  }

  const StatCard = ({
    title,
    value,
    icon: Icon,
    description,
    trend,
  }: {
    title: string;
    value: string | number;
    icon: any;
    description?: string;
    trend?: string;
  }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {trend && (
          <div className="flex items-center pt-1">
            <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
            <span className="text-xs text-green-500">{trend}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                CRM Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage customers and marketing campaigns
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setActiveTab("campaigns")}
                className="bg-gold hover:bg-[#fb0090]"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="interactions">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            {stats && (
              <>
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatCard
                    title="Total Customers"
                    value={stats.totalCustomers}
                    icon={Users}
                    description={`${stats.newCustomersThisMonth} new this month`}
                  />
                  <StatCard
                    title="Total Revenue"
                    value={`£${stats.totalRevenue.toLocaleString()}`}
                    icon={DollarSign}
                    description="From completed appointments"
                  />
                  <StatCard
                    title="Conversion Rate"
                    value={`${stats.conversionRate}%`}
                    icon={Target}
                    description="Leads to customers"
                  />
                  <StatCard
                    title="Upcoming Appointments"
                    value={stats.upcomingAppointments}
                    icon={Calendar}
                    description="Scheduled this month"
                  />
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageSquare className="h-5 w-5 mr-2" />
                        Recent Activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {stats.recentActivity.map((activity, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3 text-sm"
                          >
                            <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-foreground">
                                {activity.content}
                              </p>
                              <p className="text-muted-foreground text-xs">
                                {new Date(activity.timestamp).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Lead Sources
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {stats.leadSources.map((source, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-sm font-medium capitalize">
                              {source.source.replace("_", " ")}
                            </span>
                            <Badge variant="secondary">{source.count}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Treatment Interests */}
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Treatments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {stats.treatmentInterests.map((treatment, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-gold">
                            {treatment.count}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {treatment.treatment}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>

          <TabsContent value="customers" className="space-y-6 mt-6">
            {/* Customer Filters */}
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All statuses</SelectItem>
                  <SelectItem value="lead">Leads</SelectItem>
                  <SelectItem value="prospect">Prospects</SelectItem>
                  <SelectItem value="active_customer">
                    Active Customers
                  </SelectItem>
                  <SelectItem value="past_customer">Past Customers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedCustomer ? (
              <CustomerDetail
                customer={selectedCustomer}
                onBack={() => setSelectedCustomer(null)}
                onUpdate={fetchDashboardData}
              />
            ) : (
              <CustomerList
                customers={filteredCustomers}
                onSelectCustomer={setSelectedCustomer}
              />
            )}
          </TabsContent>

          <TabsContent value="campaigns" className="mt-6">
            <CampaignManager />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <AnalyticsView stats={stats} />
          </TabsContent>

          <TabsContent value="interactions" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Interactions</CardTitle>
                <p className="text-muted-foreground">
                  Track all customer communications and activities
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Interaction Tracking
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    View detailed interaction history and manage follow-ups
                  </p>
                  <Button
                    onClick={() => setActiveTab("customers")}
                    variant="outline"
                  >
                    View Customer Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
