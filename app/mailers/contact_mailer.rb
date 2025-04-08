class ContactMailer < ApplicationMailer
  def user_interest(name, email, phone, message)
    @name = name
    @email = email
    @phone = phone
    @message = message

    mail(
      to: ["maryiglesiassosa@gmail.com", "silva.bruno292@gmail.com"],
      reply_to: email,
      subject: "Nuevo contacto interesado en tus servicios - #{@name}"
    )
  end
end
