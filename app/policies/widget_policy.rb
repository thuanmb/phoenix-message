class WidgetPolicy < ApplicationPolicy
  def create?
    @record.message.user.id == @user.id
  end

  def update?
    @record.message.user.id == @user.id
  end
end