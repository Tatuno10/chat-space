json.user_name @message.user.name
json.created_st @message.created_at.strftime
json.content @message.content
json.image @message.image_url