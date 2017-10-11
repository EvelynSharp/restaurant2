class Api::MessagesController < ApplicationController
  before_action :set_message, only: [:update, :destroy]

  # GET /api/messages
  def index
    render json: Message.all
  end


  # POST /api/messages
  def create
    message = Message.new(message_params)
    if message.save
      render json: message
    else
      error_status(message)
      # render json: mail.errors, status: :unprocessable_entity
    end
  end


  # PATCH/PUT /api/messages/1

  def update
    if @message.update(message_params)
      render json: @message
    else
      error_status(@message)
      # render json: @mail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/messages/1
  def destroy
    @message.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def message_params
       params.fetch(:message).permit(:first_name, :last_name, :email, :message_content)
    end
end
