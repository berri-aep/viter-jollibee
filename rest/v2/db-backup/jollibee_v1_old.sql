-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2024 at 12:39 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jollibee_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_adv`
--

CREATE TABLE `jollibee_advv` (
  `adv_aid` int(11) NOT NULL,
  `adv_is_active` tinyint(1) NOT NULL,
  `adv_title` varchar(30) NOT NULL,
  `adv_image` varchar(20) NOT NULL,
  `adv_datetime` datetime NOT NULL,
  `adv_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_adv`
--

INSERT INTO `jollibee_advv` (`adv_aid`, `adv_is_active`, `adv_title`, `adv_image`, `adv_datetime`, `adv_created`) VALUES
(1, 1, 'test1', 'slider-2.png', '2024-12-18 12:55:36', '2024-12-18 03:01:17'),
(2, 1, 'test', 'slider-1.jpg', '2024-12-18 11:26:55', '2024-12-18 11:26:55'),
(3, 1, 'slider 3', 'slider-3.jpg', '2024-12-18 12:55:45', '2024-12-18 12:55:45');

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_category`
--

CREATE TABLE `jollibee_categoryy` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_image` varchar(20) NOT NULL,
  `category_title` varchar(30) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_category`
--

INSERT INTO `jollibee_categoryy` (`category_aid`, `category_is_active`, `category_image`, `category_title`, `category_datetime`, `category_created`) VALUES
(7, 1, 'nav-chickenjoy.jpg', 'Chickenjoy', '2024-12-11 15:24:59', 2024),
(8, 1, 'nav-burger.webp', 'Burger', '2024-12-11 14:23:07', 2024),
(9, 1, 'nav-spaghetti.webp', 'Spaghetti', '2024-12-11 14:23:26', 2024),
(10, 1, 'nav-palabok.webp', 'Palabok', '2024-12-11 14:23:57', 2024),
(11, 1, 'nav-sides.webp', 'Sides', '2024-12-11 14:24:05', 2024),
(12, 1, 'nav-value-meal.webp', 'Value Meal', '2024-12-11 14:33:19', 2024),
(13, 1, 'nav-desserts.webp', 'Dessert', '2024-12-11 15:06:25', 2024),
(14, 1, 'steak-1.webp', 'Burger Steak', '2024-12-11 15:22:27', 2024),
(15, 1, 'dessert-5.webp', 'Drinks', '2024-12-17 12:39:18', 2024),
(16, 1, 'dessert-4.webp', 'Pineapple Juice', '2024-12-17 12:41:11', 2024),
(17, 1, 'burger-3.webp', 'Cheese Burgar', '2024-12-17 12:41:37', 2024),
(18, 0, 'chicken-6.webp', 'Bucket', '', 2024),
(19, 1, 'burger-1.webp', 'test4', '2024-12-18 14:45:26', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_food`
--

CREATE TABLE `jollibee_foodd` (
  `food_aid` int(11) NOT NULL,
  `food_is_active` tinyint(1) NOT NULL,
  `food_image` varchar(20) NOT NULL,
  `food_title` varchar(30) NOT NULL,
  `food_price` int(20) NOT NULL,
  `food_category_id` int(11) NOT NULL,
  `food_datetime` varchar(30) NOT NULL,
  `food_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_food`
--

INSERT INTO `jollibee_foodd` (`food_aid`, `food_is_active`, `food_image`, `food_title`, `food_price`, `food_category_id`, `food_datetime`, `food_created`) VALUES
(9, 1, 'chicken-1.webp', '2pc ChickenJoy', 200, 7, '', 2024),
(10, 1, 'chicken-2.webp', '3pc Chicken Joy', 280, 7, '2024-12-11 15:35:09', 2024),
(11, 1, 'chicken-3.webp', '2pcs Fries, bucket of chicken', 300, 7, '2024-12-11 15:36:16', 2024),
(12, 1, 'burger-1.webp', 'YumBurger', 40, 8, '2024-12-11 15:36:37', 2024),
(13, 1, 'burger-2.webp', 'YumBurger w/ Fries', 60, 8, '2024-12-11 15:36:53', 2024),
(14, 1, 'burger-4.webp', 'Cheezy YumBurger w/ Fries', 70, 8, '2024-12-11 15:37:26', 2024),
(15, 1, 'spag-1.webp', 'Jollly Spaghetti Solo', 75, 9, '2024-12-11 15:38:04', 2024),
(16, 1, 'spag-2.webp', 'Jolly Spaghetti w/ Chicken', 180, 9, '2024-12-11 15:38:28', 2024),
(17, 1, 'spag-3.webp', 'Family Pan Spaghetti', 280, 9, '2024-12-11 15:38:49', 2024),
(18, 1, 'palabok-1.webp', 'Palabok Solo', 180, 10, '2024-12-11 15:39:11', 2024),
(19, 0, 'palabok-2.webp', 'Palabok w/ drinks', 205, 10, '', 2024),
(20, 1, 'palabok-3.webp', 'Palabok Family Pan', 350, 10, '', 2024),
(21, 1, 'sides-1.webp', 'Jolly Crispy Fries', 50, 11, '2024-12-11 15:40:20', 2024),
(22, 1, 'sides-2.webp', 'Mashed Potato', 50, 11, '2024-12-11 15:40:43', 2024),
(23, 1, 'sides-3.webp', 'Rice', 35, 11, '2024-12-11 15:41:04', 2024),
(24, 1, 'sides-4.webp', 'Adobo Rice', 45, 11, '2024-12-11 15:41:25', 2024),
(25, 1, 'sides-5.webp', 'Jolly Spaghetti ismol', 90, 11, '2024-12-11 15:41:51', 2024),
(26, 1, 'value-meal-1.webp', 'Chicken Burger w/ Fries', 180, 12, '2024-12-11 15:42:21', 2024),
(27, 1, 'value-meal-2.webp', 'Cheeze Chicken Burger', 200, 12, '2024-12-11 15:42:45', 2024),
(28, 1, 'value-meal-3.webp', '2pc chicken w/ peach mango', 150, 12, '2024-12-11 15:43:11', 2024),
(29, 1, 'steak-1.webp', 'Burger Steak Solo', 55, 14, '2024-12-11 15:43:48', 2024),
(30, 1, 'steak-2.webp', 'Family Pan Burger Steak', 250, 14, '2024-12-11 15:44:07', 2024),
(31, 1, 'steak-3.webp', 'Family Pan Chicken and Steak', 350, 14, '2024-12-11 15:44:47', 2024),
(32, 1, 'dessert-1.webp', 'Peach Mango Pie', 35, 13, '2024-12-11 15:48:25', 2024),
(33, 1, 'dessert-2.webp', 'Ube Pie', 30, 13, '2024-12-11 15:48:42', 2024),
(34, 1, 'dessert-3.webp', '3pcs Peach Mango Pie', 150, 13, '2024-12-11 15:49:07', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_settings_role`
--

CREATE TABLE `jollibee_settings_rolee` (
  `role_aid` int(11) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` datetime NOT NULL,
  `role_datetime` datetime NOT NULL,
  `role_is_asd` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_settings_role`
--

INSERT INTO `jollibee_settings_rolee` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_asd`) VALUES
(17, 1, 'asd', 'asddadd', '2024-12-16 15:03:12', '2024-12-16 15:03:12', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jollibee_adv`
--
ALTER TABLE `jollibee_adv`
  ADD PRIMARY KEY (`adv_aid`);

--
-- Indexes for table `jollibee_category`
--
ALTER TABLE `jollibee_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `jollibee_food`
--
ALTER TABLE `jollibee_food`
  ADD PRIMARY KEY (`food_aid`);

--
-- Indexes for table `jollibee_settings_role`
--
ALTER TABLE `jollibee_settings_role`
  ADD PRIMARY KEY (`role_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jollibee_adv`
--
ALTER TABLE `jollibee_adv`
  MODIFY `adv_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `jollibee_category`
--
ALTER TABLE `jollibee_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `jollibee_food`
--
ALTER TABLE `jollibee_food`
  MODIFY `food_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `jollibee_settings_role`
--
ALTER TABLE `jollibee_settings_role`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
