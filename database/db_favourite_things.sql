-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 15, 2020 at 06:53 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_favourite_things`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_favourite_things`
--

CREATE TABLE `tbl_favourite_things` (
  `id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_favourite_things`
--

INSERT INTO `tbl_favourite_things` (`id`, `title`, `description`, `image`) VALUES
(1, 'Family', 'What does the word family mean to me? I am so lucky to have a very supportive family. Great parents, siblings and great friends and family. Family to me is the people that I don’t have to pretend with. The people that truly understand me. Family is the people that love me unconditionally.', 'family.jpg'),
(2, 'Cats', 'Cats, like human, are individuals. Each is unique, each has a unique personality. I have known cats I did not like at all, and can say the same about humans.\r\n\r\nHowever, I would trust the average cat a great deal more than I would trust the average human. Cats are real. They don’t lie, they don’t pretend to be something they are not. Cats repay respect with respect. Cats are my kind of people.', 'cats.jpg'),
(3, 'Travel', 'Our lives are time-starved and technology-driven and, let’s be honest, it’s not often that we actually take the necessary time to de-stress and truly switch off. Travel allows us to escape life’s daily demands, dramas and deadlines and enables us to clear our minds. It encourages us to recharge our batteries and to truly disconnect from our phones, Wi-Fi, emails, laptops, social media, in order to reconnect with ourselves, each other and the natural environment.', 'travel.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_favourite_things`
--
ALTER TABLE `tbl_favourite_things`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_favourite_things`
--
ALTER TABLE `tbl_favourite_things`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
