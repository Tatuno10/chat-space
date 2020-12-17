FactoryBot.define do
  
  factory :group do
    name {faker::Team.name}
  end
end