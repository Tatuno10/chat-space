FactoryBot.define do
  
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/Users/yamashitatatsuya/Downloads/staff2.jpg")}
    user
    group
  end
end