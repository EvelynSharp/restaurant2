class Api::MailsController < ApplicationController
  before_action :set_mail, only: [:update, :destroy]

  # GET /api/mails
  def index
    render json: Mail.all
  end

  # POST /api/mails
  def create
    mail = Mail.new(mail_params)
    if mail.save
      render json: mail
    else
      error_status(mail)
      # render json: mail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/mails/1
  def update
    if @mail.update(mail_params)
      render json: @mail
    else
      error_status(@mail)
      # render json: @mail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/mails/1
  def destroy
    @mail.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mail
      @mail = Mail.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def mail_params
      params.fetch(:mail).permit(:first_name, :last_name, :email, :message)
    end
end
