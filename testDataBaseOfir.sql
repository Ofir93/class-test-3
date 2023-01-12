CREATE DATABASE  IF NOT EXISTS `meeting_management` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `meeting_management`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: meeting_management
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `development_groups`
--

DROP TABLE IF EXISTS `development_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `development_groups` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `group_name` varchar(45) NOT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `development_groups`
--

LOCK TABLES `development_groups` WRITE;
/*!40000 ALTER TABLE `development_groups` DISABLE KEYS */;
INSERT INTO `development_groups` VALUES (1,'UI Team'),(2,'Mobile Team'),(3,'React Team'),(4,'API Team');
/*!40000 ALTER TABLE `development_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meetings`
--

DROP TABLE IF EXISTS `meetings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meetings` (
  `meeting_id` int NOT NULL AUTO_INCREMENT,
  `group_id` int DEFAULT NULL,
  `time_start` datetime DEFAULT NULL,
  `time_end` datetime DEFAULT NULL,
  `meet_desc` varchar(100) DEFAULT NULL,
  `meet_room` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`meeting_id`),
  KEY `group_id_idx` (`group_id`),
  CONSTRAINT `group_id` FOREIGN KEY (`group_id`) REFERENCES `development_groups` (`group_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meetings`
--

LOCK TABLES `meetings` WRITE;
/*!40000 ALTER TABLE `meetings` DISABLE KEYS */;
INSERT INTO `meetings` VALUES (1,2,'2023-03-12 08:00:00','2023-03-12 10:00:00','app test','Blue Room'),(2,3,'2023-03-15 09:30:00','2023-03-15 12:45:00','Idia Piching','New York Room'),(3,1,'2023-03-30 12:00:00','2023-03-30 16:00:00','Developing','Large Board Room'),(4,3,'2024-03-12 08:00:00','2024-03-12 10:00:00','Idia Piching2','New York Room2'),(6,3,'2022-12-31 21:31:00','2022-12-31 00:34:00','ofir','New York Room2'),(7,3,'2022-12-31 21:31:00','2022-12-31 00:34:00','ofir','New York Room2'),(8,2,'2022-12-13 00:38:00','2022-12-13 01:38:00','sa','Large Board Room'),(9,2,'2022-12-13 00:38:00','2022-12-13 01:38:00','sa','Large Board Room'),(10,1,'2022-12-31 02:43:00','2022-12-31 03:43:00','sasqsqqqqqq','Blue Room'),(11,4,'2022-12-07 00:44:00','2022-12-07 21:50:00','sa','Large Board Room');
/*!40000 ALTER TABLE `meetings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-12 21:33:21
