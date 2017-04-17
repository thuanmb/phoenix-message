class NestedSchema < BaseSchema
  def self.format_message(result)
    result.messages(full:true).values.map{|v| v.values.join(', ')}.first.capitalize
  end
end
