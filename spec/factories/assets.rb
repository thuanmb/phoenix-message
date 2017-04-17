FactoryGirl.define do
  factory :asset do
    asset_type 'text'
    payload { { content: 'Some text' } }
  end
end
