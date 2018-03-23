class AddPaperclipToApartment < ActiveRecord::Migration[5.1]
  def change
      add_attachment :apartments, :avatar
  end
end
