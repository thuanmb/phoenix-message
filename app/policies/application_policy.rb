class ApplicationPolicy
  attr_reader :user, :record

  def initialize(session, record)
    @record = record
    @user = session
  end
end
