-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: Jollibee
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `default_name` varchar(255) NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `img_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Family Meals',1,'family_meals.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(2,'Super Meals',1,'super_meals.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(3,'Jolly Meal Savers',1,'jolly_meal_savers.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(4,'Chickenjoy',1,'chickenjoy.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(5,'Burgers',1,'burgers.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(6,'Jolly Spahetti & Palabok',1,'jolly_spaghetti_and_palabok.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(7,'Burger Steak',1,'burger_steak.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(8,'Chicken Nuggets',1,'chicken_nuggets.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(9,'Chicken Fillet',1,'chicken_fillet.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(10,'Fries & Sides',1,'fries_and_sides.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(11,'Dessert & Sweet Pies',1,'desert_and_sweet_pies.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(12,'Beverages',1,'beverages.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(13,'Jollibee Kids Values Meal',1,'jollibee_kids_values_meals.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(14,'Meals Under 750 kcal',1,'meals_under_750_kcal.png','2025-09-29 13:43:54','2025-09-29 14:04:22'),(15,'Sandwiches & Savory Pies',1,'sandwitches_and_savory_pies.png','2025-09-29 13:57:32','2025-09-29 14:04:22'),(16,'Burger Steak',1,'burger_steak.png','2025-09-29 13:57:32','2025-10-02 18:57:07');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `language_code` varchar(10) NOT NULL,
  `language_name` varchar(50) NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (1,'en','English',1,'2025-09-27 15:43:14','2025-09-27 15:52:31'),(2,'tl','Tagalog',1,'2025-09-27 15:43:14','2025-09-27 15:43:14'),(3,'zh','Chinese',0,'2025-09-27 15:43:14','2025-09-29 12:00:10');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `default_name` varchar(255) NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `img_name` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (17,1,'6 - pc. Chickenjoy w/ Rice, Jolly Spaghetti & Drinks',1,'product1.png',165,'2025-10-04 00:37:51','2025-10-04 00:37:51'),(18,1,'6 - pc. Chickenjoy Solo',1,'product2.png',507,'2025-10-04 00:37:51','2025-10-04 00:37:51'),(19,1,'8 - pc. Chickenjoy Solo',1,'product3.png',626,'2025-10-04 00:37:51','2025-10-04 06:05:31'),(20,1,'4 – pc. Chickenjoy Family Box Solo',1,'product4.png',372,'2025-10-04 00:37:51','2025-10-04 00:37:51'),(21,1,'6 - pc. Chickenjoy with Palabok Family Pan',1,'product5.png',1002,'2025-10-04 00:37:51','2025-10-04 00:37:51'),(22,2,'1 - pc. Breakfast Chickenjoy New Spicy Solo',1,'product6.png',165,'2025-10-04 00:37:51','2025-10-04 00:37:51'),(23,2,'1 - pc. Breakfast Chickenjoy New Spicy w/ Drink',1,'product7.png',194,'2025-10-04 00:37:51','2025-10-04 00:37:51'),(24,2,'1 - pc. Breakfast Chickenjoy Spicy Solo',1,'product8.png',165,'2025-10-04 00:37:51','2025-10-04 00:37:51'),(25,2,'1 - pc. Breakfast Chickenjoy Spicy w/ Drink',1,'product9.png',194,'2025-10-04 00:37:51','2025-10-04 00:37:51'),(26,2,'Longganisa Solo',1,'product10.png',152,'2025-10-04 00:37:51','2025-10-04 00:37:51');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-05 20:37:22
