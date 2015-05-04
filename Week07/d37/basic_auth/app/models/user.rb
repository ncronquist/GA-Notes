class User < ActiveRecord::Base

  has_secure_password

  validates :email,
    presence: true,
    uniqueness: {case_sensitive: false}

  validates :password,
    presence: true,
    :on => :create

  def self.authenticate(email, password)
    User.find_by_email(email).try(:authenticate, password)
  end

  def set_password_reset
    self.code = SecureRandom.urlsafe_base64
    self.expires_at = 2.hours.from_now
    self.save
  end

end
