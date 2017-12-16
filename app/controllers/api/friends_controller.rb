class Api::FriendsController < ApplicationController
  before_action :set_friend, only: [:show, :update, :destroy]

  def index
    render json: User.random_friend(current_user.liked_friends)
  end

  def update
    current_user.liked_friends << params[:id].to_i
    current_user.save
  end

  def show
    render json: @friend
  end

  def destroy
    @friend.destroy
  end

  private

  def set_friend
    @friend = Friend.find(params[:id])
  end

end
