module CntrollerMacros
  def login(user)
    @request.env["devise.mapping"] = devise.mappings[:user]
    sign_in user
  end
end