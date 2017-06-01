# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170519135147) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assets", force: :cascade do |t|
    t.string   "asset_type"
    t.json     "payload"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "images", force: :cascade do |t|
    t.string   "source"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "images", ["user_id"], name: "index_images_on_user_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer  "user_id"
    t.boolean  "shared"
    t.datetime "archived_at"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "messages", ["user_id"], name: "index_messages_on_user_id", using: :btree

  create_table "shared_message_widgets", force: :cascade do |t|
    t.integer  "shared_message_id"
    t.integer  "widget_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "shared_message_widgets", ["shared_message_id"], name: "index_shared_message_widgets_on_shared_message_id", using: :btree
  add_index "shared_message_widgets", ["widget_id"], name: "index_shared_message_widgets_on_widget_id", using: :btree

  create_table "shared_messages", force: :cascade do |t|
    t.integer  "message_id"
    t.string   "token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "shared_messages", ["message_id"], name: "index_shared_messages_on_message_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "widgets", force: :cascade do |t|
    t.integer  "message_id"
    t.integer  "asset_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "widgets", ["asset_id"], name: "index_widgets_on_asset_id", using: :btree
  add_index "widgets", ["message_id"], name: "index_widgets_on_message_id", using: :btree

  add_foreign_key "images", "users"
  add_foreign_key "messages", "users"
  add_foreign_key "shared_message_widgets", "shared_messages"
  add_foreign_key "shared_message_widgets", "widgets"
  add_foreign_key "shared_messages", "messages"
  add_foreign_key "widgets", "assets"
  add_foreign_key "widgets", "messages"
end
