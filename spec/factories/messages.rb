FactoryBot.define do
  
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/Public/images/staff2.jpg")}
    user
    group
  end
end