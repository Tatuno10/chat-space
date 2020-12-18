require 'rails_helper'

RSpec.describe Message, type: :model do
  describe "#create" do
    context 'can save' do
      it "If you have a message, you can save it" do
        expect(build(:message, image: nil)).to be_valid
      end

      it 'If you have an image, you can save it' do
      expect(build(:message, content: nil)).to be_valid
      end

      it 'If you have a message and an image, you can save it' do
      expect(build(:message)).to be_valid
      end
    end

    context 'can not save' do
      it 'Cannot be saved without a message or image' do
        message = build(:message, content: nil, image: nil)
        message.valid?
        expect(message.errors[:content]).to include("を入力してください")
      end

      it 'Cannot save without group_id' do
        message = build(:message, group: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end

      it 'Cannot save without user_id' do
        message = build(:message, user: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end