class CreateRatings < ActiveRecord::Migration[5.1]
  def change
    create_table :ratings do |t|
      t.string :rating
      t.string :comment
      t.string :listing
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
