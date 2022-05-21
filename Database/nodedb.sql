-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2022 at 09:20 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `commentBody` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PostId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `commentBody`, `createdAt`, `updatedAt`, `PostId`) VALUES
(8, 'hello this is awsome', '2022-05-15 11:50:21', '2022-05-15 11:50:21', NULL),
(9, 'hello this is awsome', '2022-05-15 11:50:37', '2022-05-15 11:50:37', NULL),
(11, 'hello this is awsome', '2022-05-15 11:52:17', '2022-05-15 11:52:17', NULL),
(14, 'hello this is awsome', '2022-05-15 11:57:12', '2022-05-15 11:57:12', NULL),
(15, 'hello this is a comment', '2022-05-15 12:36:18', '2022-05-15 12:36:18', NULL),
(20, 'harshit', '2022-05-15 13:15:28', '2022-05-15 13:15:28', 23),
(21, 'This is the comment', '2022-05-15 13:15:42', '2022-05-15 13:15:42', 23);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `postText` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `visibility` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `postText`, `username`, `visibility`, `createdAt`, `updatedAt`, `UserId`) VALUES
(7, 'f', 'skjdakljdlkajs', 'harshit', 'Private', '2022-05-15 11:25:01', '2022-05-15 11:25:01', NULL),
(11, 'f', 'skjdakljdlkajs', 'harshit', 'Private', '2022-05-15 11:42:58', '2022-05-15 11:42:58', NULL),
(13, 'shreyanshu', 'skjdakljdlkajs', 'harshit', 'Private', '2022-05-15 12:30:59', '2022-05-15 12:30:59', NULL),
(15, 'shreyanshu', 'skjdakljdlkajs', 'harshit', 'Private', '2022-05-15 12:31:54', '2022-05-15 12:31:54', NULL),
(17, 'shreyanshu', 'skjdakljdlkajs', 'harshit', 'Private', '2022-05-15 12:32:27', '2022-05-15 12:32:27', NULL),
(18, 'shreyanshu', 'skjdakljdlkajs', 'harshit', 'Private', '2022-05-15 12:34:20', '2022-05-15 12:34:20', NULL),
(19, 'shreyanshu', 'skjdakljdlkajs', 'harshit', 'Private', '2022-05-15 12:34:27', '2022-05-15 12:34:27', NULL),
(20, 'shreyanshu', 'skjdakljdlkajs', 'harshit', 'Private', '2022-05-15 12:34:34', '2022-05-15 12:34:34', NULL),
(21, 'shreyanshu', 'skjdakljdlkajs', 'harshit', 'Private', '2022-05-15 12:34:49', '2022-05-15 12:34:49', NULL),
(23, 'shreyanshu', 'skjdakljdlkajs', 'harshit', 'Private', '2022-05-15 13:05:11', '2022-05-15 13:05:11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `phone`, `createdAt`, `updatedAt`) VALUES
(1, 'harshit', '123', 'harshitlove28@gmail.com', '8795414135', '2022-05-15 15:04:12', '2022-05-15 15:04:12'),
(2, 'Ayushman Sharma', 'Ayushman@123', 'ayushman@gmail.com', '1234567890', '2022-05-15 15:48:23', '2022-05-15 15:48:23'),
(3, 'Ayushman', '$2b$10$LraGWeA8cVPQT4v6eKrrHOXzo0m8bm8tt9SNNy5Hi/8QDuYtWIJRC', 'ayushman@gmail.com', '1234567890', '2022-05-15 15:50:15', '2022-05-15 15:50:15'),
(4, 'Anubhav', '$2b$10$/RiFi0rIHFeycNGzWkyoDucQwGidtzKXaRnlsH5Mh1IL4xaM02AuS', 'anubhavraj729@gmail.com', '9693574551', '2022-05-15 17:23:17', '2022-05-15 17:23:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PostId` (`PostId`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UserId` (`UserId`),
  ADD KEY `UserId_2` (`UserId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`PostId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
