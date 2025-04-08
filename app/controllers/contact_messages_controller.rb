class ContactMessagesController < ApplicationController
  include ActionController::RequestForgeryProtection
  protect_from_forgery with: :null_session

  def create
    name = params[:name]
    email = params[:email]
    phone = params[:phone]
    message = params[:message]

    if name.blank? || email.blank? || phone.blank? || message.blank?
      return render json: { error: 'Campos incompletos' }, status: :unprocessable_entity
    end

    ContactMailer.user_interest(name, email, phone, message).deliver_later
    render json: { message: 'Mensaje enviado correctamente' }, status: :ok
  end
end
