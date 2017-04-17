class AssetSchema < BaseSchema

  Schema = Dry::Validation.Form do
    required(:asset_type).filled
    required(:payload).filled
  end

  def self.create(params)
    build_output(Schema, params)
  end
end
