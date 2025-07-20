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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Mail,
  MessageSquare,
  Users,
  Target,
  TrendingUp,
  Plus,
  Eye,
  Send,
  Pause,
  Play,
  BarChart3,
} from "lucide-react";
import type { Campaign } from "../../../server/db/schema";

export function CampaignManager() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    type: "email",
    status: "draft",
    targetSegment: {
      treatmentInterests: [],
      customerStatus: [],
      lastVisitDays: undefined,
    },
    content: {
      subject: "",
      body: "",
      ctaText: "",
      ctaLink: "",
    },
  });

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/crm/campaigns");
      const data = await response.json();

      if (data.success) {
        setCampaigns(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch campaigns:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCampaign = async () => {
    try {
      const response = await fetch("/api/crm/campaigns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCampaign),
      });

      if (response.ok) {
        setShowCreateDialog(false);
        setNewCampaign({
          name: "",
          type: "email",
          status: "draft",
          targetSegment: {
            treatmentInterests: [],
            customerStatus: [],
            lastVisitDays: undefined,
          },
          content: {
            subject: "",
            body: "",
            ctaText: "",
            ctaLink: "",
          },
        });
        fetchCampaigns();
      }
    } catch (error) {
      console.error("Failed to create campaign:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "draft":
        return "bg-gray-100 text-gray-800";
      case "active":
        return "bg-green-100 text-green-800";
      case "paused":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCampaignIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4" />;
      case "sms":
        return <MessageSquare className="h-4 w-4" />;
      case "social_media":
        return <Users className="h-4 w-4" />;
      default:
        return <Target className="h-4 w-4" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Marketing Campaigns</h2>
          <p className="text-muted-foreground">
            Create and manage marketing campaigns to engage your customers
          </p>
        </div>
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button className="bg-gold hover:bg-gold/90">
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Campaign</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="campaignName">Campaign Name</Label>
                  <Input
                    id="campaignName"
                    value={newCampaign.name}
                    onChange={(e) =>
                      setNewCampaign({ ...newCampaign, name: e.target.value })
                    }
                    placeholder="e.g., Summer Botox Promotion"
                  />
                </div>
                <div>
                  <Label htmlFor="campaignType">Campaign Type</Label>
                  <Select
                    value={newCampaign.type}
                    onValueChange={(value: any) =>
                      setNewCampaign({ ...newCampaign, type: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="social_media">Social Media</SelectItem>
                      <SelectItem value="advertisement">
                        Advertisement
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Subject/Title</Label>
                <Input
                  id="subject"
                  value={newCampaign.content.subject}
                  onChange={(e) =>
                    setNewCampaign({
                      ...newCampaign,
                      content: {
                        ...newCampaign.content,
                        subject: e.target.value,
                      },
                    })
                  }
                  placeholder="Campaign subject line"
                />
              </div>

              <div>
                <Label htmlFor="body">Message Content</Label>
                <Textarea
                  id="body"
                  value={newCampaign.content.body}
                  onChange={(e) =>
                    setNewCampaign({
                      ...newCampaign,
                      content: {
                        ...newCampaign.content,
                        body: e.target.value,
                      },
                    })
                  }
                  placeholder="Write your campaign message..."
                  rows={5}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ctaText">Call-to-Action Text</Label>
                  <Input
                    id="ctaText"
                    value={newCampaign.content.ctaText}
                    onChange={(e) =>
                      setNewCampaign({
                        ...newCampaign,
                        content: {
                          ...newCampaign.content,
                          ctaText: e.target.value,
                        },
                      })
                    }
                    placeholder="e.g., Book Now"
                  />
                </div>
                <div>
                  <Label htmlFor="ctaLink">Call-to-Action Link</Label>
                  <Input
                    id="ctaLink"
                    value={newCampaign.content.ctaLink}
                    onChange={(e) =>
                      setNewCampaign({
                        ...newCampaign,
                        content: {
                          ...newCampaign.content,
                          ctaLink: e.target.value,
                        },
                      })
                    }
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setShowCreateDialog(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleCreateCampaign}>Create Campaign</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Campaigns
                </p>
                <p className="text-2xl font-bold">{campaigns.length}</p>
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
                  Active Campaigns
                </p>
                <p className="text-2xl font-bold">
                  {campaigns.filter((c) => c.status === "active").length}
                </p>
              </div>
              <Play className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Sent
                </p>
                <p className="text-2xl font-bold">
                  {campaigns.reduce((sum, c) => sum + c.stats.sent, 0)}
                </p>
              </div>
              <Send className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Avg. Open Rate
                </p>
                <p className="text-2xl font-bold">
                  {campaigns.length > 0
                    ? (
                        campaigns.reduce(
                          (sum, c) =>
                            sum +
                            (c.stats.sent > 0
                              ? (c.stats.opened / c.stats.sent) * 100
                              : 0),
                          0,
                        ) / campaigns.length
                      ).toFixed(1)
                    : 0}
                  %
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-gold" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaigns List */}
      <Card>
        <CardHeader>
          <CardTitle>All Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {getCampaignIcon(campaign.type)}
                  </div>
                  <div>
                    <h3 className="font-medium">{campaign.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span className="capitalize">
                        {campaign.type.replace("_", " ")}
                      </span>
                      <span>•</span>
                      <span>
                        Created{" "}
                        {new Date(campaign.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <Badge
                      className={getStatusColor(campaign.status)}
                      variant="secondary"
                    >
                      {campaign.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground mt-1">
                      {campaign.stats.sent > 0 && (
                        <span>
                          {campaign.stats.sent} sent,{" "}
                          {(
                            (campaign.stats.opened / campaign.stats.sent) *
                            100
                          ).toFixed(1)}
                          % opened
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <BarChart3 className="h-3 w-3 mr-1" />
                      Analytics
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {campaigns.length === 0 && (
              <div className="text-center py-12">
                <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No campaigns yet</h3>
                <p className="text-muted-foreground mb-4">
                  Create your first marketing campaign to engage with customers
                </p>
                <Button
                  onClick={() => setShowCreateDialog(true)}
                  className="bg-gold hover:bg-gold/90"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Campaign
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
