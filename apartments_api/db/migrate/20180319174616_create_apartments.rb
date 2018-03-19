class CreateApartments < ActiveRecord::Migration[5.1]
  def change
    create_table :apartments do |t|
      t.integer :apt_number
      t.string :address
      t.string :city
      t.integer :zip
      t.string :state
      t.string :country
      t.string :name
      t.string :phone
      t.string :contact

      t.timestamps
    end
  end
end
