class Apartment < ApplicationRecord
  validates :address, presence: true
  validates :apt_number, presence: true
  validates :city, presence: true
  validates :zip, presence: true
  validates :state, length: { minimum: 2, too_short: "State must be abbreviated" }
  validates :state, length: { maximum: 2, too_long: "State must be abbreviated"}
  validates :state, presence: true
  validates :country, presence: true
  validates :name, presence: true
  validates :phone, presence: true
  validates :phone, length: { minimum: 10, too_short: "please enter a phone number with area code"}
  validates :phone, length: { maximum: 10, too_long: "please enter a phone number with area code"}
  validates :contact, presence: true
end
