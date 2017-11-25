-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2017 at 07:41 PM
-- Server version: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hackathon_social_intranet`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `role_id` int(11) NOT NULL,
  `platform_id` int(11) NOT NULL DEFAULT '1',
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` tinyint(1) NOT NULL DEFAULT '0',
  `city` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `schools` text COLLATE utf8_unicode_ci,
  `jobs` text COLLATE utf8_unicode_ci,
  `interests` text COLLATE utf8_unicode_ci,
  `avatar` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `background_cover` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `friends` int(11) NOT NULL DEFAULT '0',
  `token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_id` (`role_id`),
  UNIQUE KEY `platform_id` (`platform_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `email`, `password`, `role_id`, `platform_id`, `first_name`, `last_name`, `date_of_birth`, `gender`, `city`, `country`, `description`, `schools`, `jobs`, `interests`, `avatar`, `background_cover`, `friends`, `token`, `created_at`, `updated_at`) VALUES
(1, 'toanleviet95@gmail.com', '123456', 2, 1, 'Toan', 'Le Viet', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '2017-11-19 15:25:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account_id` (`account_id`),
  UNIQUE KEY `post_id` (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `platforms`
--

DROP TABLE IF EXISTS `platforms`;
CREATE TABLE IF NOT EXISTS `platforms` (
  `id` int(11) NOT NULL,
  `platform` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `platforms`
--

INSERT INTO `platforms` (`id`, `platform`, `created_at`, `updated_at`) VALUES
(1, 'system', '2017-11-19 15:12:06', NULL),
(2, 'google', '2017-11-19 15:12:06', NULL),
(3, 'facebook', '2017-11-19 15:12:20', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account_id` int(11) NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `likes` int(11) NOT NULL DEFAULT '0',
  `dislikes` int(11) NOT NULL DEFAULT '0',
  `comments` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `account_id`, `content`, `likes`, `dislikes`, `comments`, `created_at`, `updated_at`) VALUES
(36, 1, 'asdasddddddddddddddddddddd', 0, 0, 0, '2017-11-24 19:07:50', NULL),
(37, 1, 'sssssssssssssssss', 0, 0, 0, '2017-11-24 19:10:00', NULL),
(38, 1, 'gggggggggggggggggggggggg', 0, 0, 0, '2017-11-24 19:10:16', NULL),
(39, 1, 'rtyrtyrtyrtyrty', 0, 0, 0, '2017-11-24 19:18:26', NULL),
(40, 1, 'heloooooooooooooooooooo', 0, 0, 0, '2017-11-24 19:18:42', NULL),
(41, 1, 'heoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', 0, 0, 0, '2017-11-24 19:22:00', NULL),
(42, 1, 'hiiiiiiiiiiiiiiiiiiii', 0, 0, 0, '2017-11-24 19:22:42', NULL),
(43, 1, 'ffffffffffffffffff', 0, 0, 0, '2017-11-24 19:29:41', NULL),
(44, 1, 'sssssssssssss', 0, 0, 0, '2017-11-24 19:30:29', NULL),
(45, 1, 'eeeeeeeeeeeeeeeeeeeeeeeeeeeee', 0, 0, 0, '2017-11-24 19:30:51', NULL),
(46, 1, 'rrrrrrrrrrrrrrrrrrr', 0, 0, 0, '2017-11-24 19:32:56', NULL),
(47, 1, 'ddddddddddddddddddddd', 0, 0, 0, '2017-11-24 19:33:09', NULL),
(48, 1, 'wwwwwwwwwwwwwwww', 0, 0, 0, '2017-11-24 19:36:41', NULL),
(49, 1, 'ddddddddddddddd', 0, 0, 0, '2017-11-24 19:38:25', NULL),
(50, 1, 'hhhhhhhhhhhhhhhhhh', 0, 0, 0, '2017-11-24 19:38:38', NULL),
(51, 1, 'rrrrrrrrrrrrrrrrrrr', 0, 0, 0, '2017-11-24 19:40:25', NULL),
(52, 1, 'gggggggggggggggggggggggggggggg', 0, 0, 0, '2017-11-24 19:40:39', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL,
  `role` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role`, `description`, `created_at`, `updated_at`) VALUES
(1, 'administrator', NULL, '2017-11-19 14:37:33', NULL),
(2, 'resident', NULL, '2017-11-19 14:37:33', NULL),
(3, 'leadership', NULL, '2017-11-19 14:38:29', NULL),
(4, 'department', NULL, '2017-11-19 14:38:29', NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `FK_accounts_platforms` FOREIGN KEY (`platform_id`) REFERENCES `platforms` (`id`),
  ADD CONSTRAINT `FK_accounts_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_comments_accounts` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `FK_comments_posts` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `FK_posts_accounts` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
