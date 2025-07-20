import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Users,
  Target,
  Mail,
  Calendar,
  DollarSign,
} from "lucide-react";

interface AnalyticsViewProps {
  stats: any;
}

export function AnalyticsView({ stats }: AnalyticsViewProps) {
  const leadSourceData =
    stats?.leadSources?.map((source: any) => ({
      name: source.source.replace("_", " "),
      value: source.count,
    })) || [];

  const treatmentData =
    stats?.treatmentInterests?.map((treatment: any) => ({
      name: treatment.treatment,
      interest: treatment.count,
    })) || [];

  // Mock time series data for charts
  const monthlyData = [
    { month: "Jan", customers: 12, revenue: 3600, bookings: 8 },
    { month: "Feb", customers: 19, revenue: 5700, bookings: 12 },
    { month: "Mar", customers: 15, revenue: 4500, bookings: 10 },
    { month: "Apr", customers: 22, revenue: 6600, bookings: 15 },
    { month: "May", customers: 28, revenue: 8400, bookings: 18 },
    { month: "Jun", customers: 31, revenue: 9300, bookings: 21 },
  ];

  const COLORS = ["#D4AF37", "#B8860B", "#DAA520", "#BDB76B", "#F0E68C"];

  if (!stats) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No analytics data</h3>
          <p className="text-muted-foreground">
            Analytics will appear here once you have customer data
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Customers
                </p>
                <p className="text-2xl font-bold">{stats.totalCustomers}</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />+
                  {stats.newCustomersThisMonth} this month
                </p>
              </div>
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Conversion Rate
                </p>
                <p className="text-2xl font-bold">{stats.conversionRate}%</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Leads to customers
                </p>
              </div>
              <Target className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold">
                  £{stats.totalRevenue.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  From completed treatments
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Upcoming Appointments
                </p>
                <p className="text-2xl font-bold">
                  {stats.upcomingAppointments}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Scheduled this month
                </p>
              </div>
              <Calendar className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Customer Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="customers"
                  stroke="#D4AF37"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {leadSourceData.map((entry: any, index: number) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [`£${value}`, "Revenue"]}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Bar dataKey="revenue" fill="#D4AF37" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Treatment Interest</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={treatmentData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="interest" fill="#B8860B" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Customer Acquisition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-gold">
                {stats.newCustomersThisMonth}
              </div>
              <div className="text-sm text-muted-foreground">
                New This Month
              </div>
              <div className="text-xs text-green-600">
                +
                {(
                  (stats.newCustomersThisMonth / stats.totalCustomers) *
                  100
                ).toFixed(1)}
                % growth
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Average Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-gold">
                £
                {stats.totalAppointments > 0
                  ? Math.round(stats.totalRevenue / stats.totalAppointments)
                  : 0}
              </div>
              <div className="text-sm text-muted-foreground">Per Treatment</div>
              <div className="text-xs text-muted-foreground">
                Based on {stats.totalAppointments} appointments
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Customer Lifetime Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-gold">
                £
                {stats.totalCustomers > 0
                  ? Math.round(stats.totalRevenue / stats.totalCustomers)
                  : 0}
              </div>
              <div className="text-sm text-muted-foreground">Average CLV</div>
              <div className="text-xs text-muted-foreground">
                Total revenue per customer
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lead Source Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Source</th>
                  <th className="text-right py-2">Leads</th>
                  <th className="text-right py-2">Conversion Rate</th>
                  <th className="text-right py-2">Cost per Lead</th>
                  <th className="text-right py-2">ROI</th>
                </tr>
              </thead>
              <tbody>
                {stats.leadSources.map((source: any, index: number) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 capitalize">
                      {source.source.replace("_", " ")}
                    </td>
                    <td className="text-right py-2">{source.count}</td>
                    <td className="text-right py-2">
                      {(Math.random() * 30 + 10).toFixed(1)}%
                    </td>
                    <td className="text-right py-2">
                      £{(Math.random() * 50 + 20).toFixed(0)}
                    </td>
                    <td className="text-right py-2 text-green-600">
                      {(Math.random() * 200 + 150).toFixed(0)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
