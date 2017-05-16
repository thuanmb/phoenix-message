class WidgetPolicy < ApplicationPolicy
  def create?
    created_by_me
  end

  def update?
    created_by_me
  end

  def destroy?
    created_by_me
  end

  private

  def created_by_me
    @record.message.user.id == @user.id
  end
end