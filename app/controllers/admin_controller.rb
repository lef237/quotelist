# frozen_string_literal: true

class AdminController < ApplicationController
  def new; end

  def create
    admin_password = params[:admin_password]

    if admin_password == ENV['ADMIN_SECRET_PASSWORD']
      current_user.update(admin: true)
      redirect_to root_path, notice: 'You have been granted admin rights.'
    else
      redirect_to admin_path, alert: 'Invalid password.'
    end
  end
end
