class DefaultController < ApplicationController
  def index
    render json: { message: "Backend is working!" }, status: :ok
  end
end
