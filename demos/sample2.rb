# Sample worker code from above
class AudienceCreatedSlackNotificationWorker
  include Sidekiq::Worker

  def perform(audience_id)
    audience = Audience.find(audience_id)

    audience_url = "#{ENV["ADMIN_URL"]}/audiences/#{audience.id}/edit"

    attachment = {
      fallback: "Audience: #{audience.name} has been created in Revere Exchange #{Rails.env}",
      color: "good",
      title: audience.name,
      title_link: audience_url,
      text: "View more details about this audience in the admin panel",
      fields: [
        {
          "title": "Action",
          "value": "Created",
          "short": false
        },
        {
          "title": "Environment",
          "value": ENV["RAILS_ENV"],
          "short": false
        }
      ]
    }

    notifier = Slack::Notifier.new ENV["TEAM_RAD_WEBHOOK_URL"]
    notifier.ping "A new audience has been added", attachments: [attachment]
  end
end

require "asdasd/web"

# Another rails controller sample
class CampaignsController < ApplicationController
  before_action :set_campaign, only: [:edit, :update]

  has_scope :client
  has_scope :by_name
  has_scope :by_goal
  has_scope :by_status
  has_scope :by_running_period, using: [:starts_at, :ends_at], type: :hash

  def index
    @clients = Client.select(:id, :name).active.all
    @campaigns = apply_scopes(Campaign).includes(:client).order(created_at: :desc).page(params[:page])
  end

  def edit
  end

  def update
    if @campaign.update(campaign_params)
      redirect_to campaigns_url, notice: "Campaign was successfully updated."
    else
      render :edit
    end
  end

  private

  def set_campaign
    @campaign = Campaign.includes(:client, :audiences, { :ads => [:ad_media] }, :ads_campaigns).find(params[:id])
  end

  def campaign_params
    params.require(:campaign).permit(:status, :start_date, :end_date, :time_zone)
  end

  get "/404", to: "asd"

  Sidekiq::Web.use Rack::Auth::Basic do |username, password|
  end
