# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|

### Association
- has_many :messages
- has_many :phots

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|||, |
|||, |

### Association
- 
- 

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|||, |
|||, |

### Association
- 
- 

## photosテーブル

|Column|Type|Options|
|------|----|-------|
|||, |
|||, |

### Association
- 
- 
