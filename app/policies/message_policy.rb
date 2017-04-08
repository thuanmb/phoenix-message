class MessagePolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    @record.user_id == @user.id
  end

  def create?
    true
  end

  def update?
    @record.user_id == @user.id
  end
end