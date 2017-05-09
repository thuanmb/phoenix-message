class SharedMessagePolicy < ApplicationPolicy
  def show?
    true
  end

  def create?
    @record.message.user_id == @user.id
  end
end