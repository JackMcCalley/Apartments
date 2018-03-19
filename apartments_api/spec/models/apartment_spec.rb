require 'rails_helper'

RSpec.describe Apartment, type: :model do
  it "should validate apartment" do
    apartment = Apartment.create
    expect(apartment.errors[:apt_number]).to_not be_empty
    expect(apartment.errors[:address]).to_not be_empty
    expect(apartment.errors[:city]).to_not be_empty
    expect(apartment.errors[:zip]).to_not be_empty
    expect(apartment.errors[:state]).to_not be_empty
    expect(apartment.errors[:country]).to_not be_empty
    expect(apartment.errors[:name]).to_not be_empty
    expect(apartment.errors[:phone]).to_not be_empty
    expect(apartment.errors[:contact]).to_not be_empty
  end
end
