class MessageRepresenter < BaseRepresenter
  property :id
  property :user, decorator: UserRepresenter
  property :shared
  property :archived_at
  property :created_at
  collection :widgets, decorator: WidgetRepresenter
end