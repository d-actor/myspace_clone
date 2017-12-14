class Api::FriendsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_friend(current_user.liked_friends)
  end

  def update
    current_user.liked_friends << params[:id].to_i
    current_user.save
  end

  def show
  end
end
