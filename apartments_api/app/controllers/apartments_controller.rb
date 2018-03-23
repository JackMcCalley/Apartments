class ApartmentsController < ApplicationController

#before_action :authenticate_user only: :index

  def index
      apartments = Apartment.all
      render json: apartments
  end

  def create
    # Create a new apartment
    apartment = Apartment.create(apartment_params)
    if apartment.valid?
      render json: apartment
    else
      render json: apartment.errors, status: :unprocessable_entity
    end
  end

  # Handle strong parameters, so we are secure
  def apartment_params
    params.require(:apartment).permit(:apt_number, :address, :city, :zip, :state, :country, :name, :phone, :contact)
  end
end
