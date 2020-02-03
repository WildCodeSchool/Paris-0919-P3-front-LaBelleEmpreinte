-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: la_belle_empreinte
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(200) NOT NULL,
  `date` date DEFAULT NULL,
  `auteur` varchar(200) DEFAULT NULL,
  `contenu` varchar(5000) DEFAULT NULL,
  `publication` tinyint(4) DEFAULT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `minutes_lecture` int(11) DEFAULT NULL,
  `geographie` varchar(1000) DEFAULT NULL,
  `listes_initiatives` tinyint(4) DEFAULT NULL,
  `lien_partage` varchar(1000) DEFAULT NULL,
  `image2` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles_has_besoins`
--

DROP TABLE IF EXISTS `articles_has_besoins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles_has_besoins` (
  `articles_id` int(11) DEFAULT NULL,
  `besoins_id` int(11) DEFAULT NULL,
  KEY `articles_id` (`articles_id`),
  KEY `besoins_id` (`besoins_id`),
  CONSTRAINT `articles_has_besoins_ibfk_1` FOREIGN KEY (`articles_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `articles_has_besoins_ibfk_2` FOREIGN KEY (`besoins_id`) REFERENCES `besoins` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles_has_besoins`
--

LOCK TABLES `articles_has_besoins` WRITE;
/*!40000 ALTER TABLE `articles_has_besoins` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles_has_besoins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles_has_categories_intermediaires`
--

DROP TABLE IF EXISTS `articles_has_categories_intermediaires`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles_has_categories_intermediaires` (
  `articles_id` int(11) DEFAULT NULL,
  `categories_intermediaires_id` int(11) DEFAULT NULL,
  KEY `articles_id` (`articles_id`),
  KEY `categories_intermediaires_id` (`categories_intermediaires_id`),
  CONSTRAINT `articles_has_categories_intermediaires_ibfk_1` FOREIGN KEY (`articles_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `articles_has_categories_intermediaires_ibfk_2` FOREIGN KEY (`categories_intermediaires_id`) REFERENCES `categories_intermediaires` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles_has_categories_intermediaires`
--

LOCK TABLES `articles_has_categories_intermediaires` WRITE;
/*!40000 ALTER TABLE `articles_has_categories_intermediaires` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles_has_categories_intermediaires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles_has_categories_objets`
--

DROP TABLE IF EXISTS `articles_has_categories_objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles_has_categories_objets` (
  `articles_id` int(11) DEFAULT NULL,
  `categories_objets_id` int(11) DEFAULT NULL,
  KEY `articles_id` (`articles_id`),
  KEY `categories_objets_id` (`categories_objets_id`),
  CONSTRAINT `articles_has_categories_objets_ibfk_1` FOREIGN KEY (`articles_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `articles_has_categories_objets_ibfk_2` FOREIGN KEY (`categories_objets_id`) REFERENCES `categories_objets` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles_has_categories_objets`
--

LOCK TABLES `articles_has_categories_objets` WRITE;
/*!40000 ALTER TABLE `articles_has_categories_objets` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles_has_categories_objets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles_has_initiatives`
--

DROP TABLE IF EXISTS `articles_has_initiatives`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles_has_initiatives` (
  `articles_id` int(11) DEFAULT NULL,
  `initiatives_id` int(11) DEFAULT NULL,
  KEY `articles_id` (`articles_id`),
  KEY `initiatives_id` (`initiatives_id`),
  CONSTRAINT `articles_has_initiatives_ibfk_1` FOREIGN KEY (`articles_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `articles_has_initiatives_ibfk_2` FOREIGN KEY (`initiatives_id`) REFERENCES `initiatives` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles_has_initiatives`
--

LOCK TABLES `articles_has_initiatives` WRITE;
/*!40000 ALTER TABLE `articles_has_initiatives` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles_has_initiatives` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles_has_objets`
--

DROP TABLE IF EXISTS `articles_has_objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles_has_objets` (
  `articles_id` int(11) DEFAULT NULL,
  `objets_id` int(11) DEFAULT NULL,
  KEY `articles_id` (`articles_id`),
  KEY `objets_id` (`objets_id`),
  CONSTRAINT `articles_has_objets_ibfk_1` FOREIGN KEY (`articles_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `articles_has_objets_ibfk_2` FOREIGN KEY (`objets_id`) REFERENCES `objets` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles_has_objets`
--

LOCK TABLES `articles_has_objets` WRITE;
/*!40000 ALTER TABLE `articles_has_objets` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles_has_objets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles_has_types_activites`
--

DROP TABLE IF EXISTS `articles_has_types_activites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles_has_types_activites` (
  `articles_id` int(11) DEFAULT NULL,
  `types_activites_id` int(11) DEFAULT NULL,
  KEY `articles_id` (`articles_id`),
  KEY `types_activites_id` (`types_activites_id`),
  CONSTRAINT `articles_has_types_activites_ibfk_1` FOREIGN KEY (`articles_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `articles_has_types_activites_ibfk_2` FOREIGN KEY (`types_activites_id`) REFERENCES `types_activites` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles_has_types_activites`
--

LOCK TABLES `articles_has_types_activites` WRITE;
/*!40000 ALTER TABLE `articles_has_types_activites` DISABLE KEYS */;
/*!40000 ALTER TABLE `articles_has_types_activites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `besoins`
--

DROP TABLE IF EXISTS `besoins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `besoins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `besoins` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `besoins`
--

LOCK TABLES `besoins` WRITE;
/*!40000 ALTER TABLE `besoins` DISABLE KEYS */;
/*!40000 ALTER TABLE `besoins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_intermediaires`
--

DROP TABLE IF EXISTS `categories_intermediaires`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories_intermediaires` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `categories_objets_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories_objets_id` (`categories_objets_id`),
  CONSTRAINT `categories_intermediaires_ibfk_1` FOREIGN KEY (`categories_objets_id`) REFERENCES `categories_objets` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_intermediaires`
--

LOCK TABLES `categories_intermediaires` WRITE;
/*!40000 ALTER TABLE `categories_intermediaires` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories_intermediaires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_objets`
--

DROP TABLE IF EXISTS `categories_objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories_objets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categorie` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_objets`
--

LOCK TABLES `categories_objets` WRITE;
/*!40000 ALTER TABLE `categories_objets` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories_objets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `engagements`
--

DROP TABLE IF EXISTS `engagements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `engagements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `engagements` varchar(1000) DEFAULT NULL,
  `urlPicto` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `engagements`
--

LOCK TABLES `engagements` WRITE;
/*!40000 ALTER TABLE `engagements` DISABLE KEYS */;
/*!40000 ALTER TABLE `engagements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `initiatives`
--

DROP TABLE IF EXISTS `initiatives`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `initiatives` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `adresse1` varchar(200) DEFAULT NULL,
  `adresse2` varchar(200) DEFAULT NULL,
  `adresse3` varchar(200) DEFAULT NULL,
  `logo` varchar(200) DEFAULT NULL,
  `telephone1` varchar(15) DEFAULT NULL,
  `telephone2` varchar(15) DEFAULT NULL,
  `telephone3` varchar(15) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `contact_prenom_1` varchar(50) DEFAULT NULL,
  `contact_nom_1` varchar(100) DEFAULT NULL,
  `contact_mail_1` varchar(100) DEFAULT NULL,
  `contact_telephone_1` varchar(15) DEFAULT NULL,
  `contact_prenom_2` varchar(50) DEFAULT NULL,
  `contact_nom_2` varchar(100) DEFAULT NULL,
  `contact_mail_2` varchar(100) DEFAULT NULL,
  `contact_telephone_2` varchar(15) DEFAULT NULL,
  `date_dernier_echange` date DEFAULT NULL,
  `objets_labellises` tinyint(4) DEFAULT NULL,
  `date_evenement` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `initiatives`
--

LOCK TABLES `initiatives` WRITE;
/*!40000 ALTER TABLE `initiatives` DISABLE KEYS */;
INSERT INTO `initiatives` VALUES (1,'Vestiaire Collective','https://fr.vestiairecollective.com/','33 boulevard du General Martial Valin, 75015 Paris','41 Rue Censier, 75005 Paris',NULL,'https://pbs.twimg.com/profile_images/1051952073204527105/3ugzbQ4E_400x400.jpg',NULL,NULL,NULL,'Plateforme en ligne de mode et luxe d’occasion',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-02-10'),(2,'Imparfaite Paris','https://www.imparfaiteparis.com/','33 rue des francs bourgeois, 75004 Paris',NULL,NULL,'https://media-exp1.licdn.com/dms/image/C560BAQH09O5aQ8INxA/company-logo_200_200/0?e=2159024400&v=beta&t=_V2dg8iH69s3YmE_OD5H1CHte3IhXuhENA57ZmeUh88',NULL,NULL,NULL,'De belles pièces vintage en ligne',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'Backmarket','https://www.backmarket.fr/',NULL,NULL,NULL,'https://d1eh9yux7w8iql.cloudfront.net/fo/img/logo-bm-schema.png',NULL,NULL,NULL,'Le (super) marché du reconditionné',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `initiatives` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `initiatives_has_besoins`
--

DROP TABLE IF EXISTS `initiatives_has_besoins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `initiatives_has_besoins` (
  `initiatives_id` int(11) DEFAULT NULL,
  `besoins_id` int(11) DEFAULT NULL,
  KEY `initiatives_id` (`initiatives_id`),
  KEY `besoins_id` (`besoins_id`),
  CONSTRAINT `initiatives_has_besoins_ibfk_1` FOREIGN KEY (`initiatives_id`) REFERENCES `initiatives` (`id`) ON DELETE CASCADE,
  CONSTRAINT `initiatives_has_besoins_ibfk_2` FOREIGN KEY (`besoins_id`) REFERENCES `besoins` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `initiatives_has_besoins`
--

LOCK TABLES `initiatives_has_besoins` WRITE;
/*!40000 ALTER TABLE `initiatives_has_besoins` DISABLE KEYS */;
/*!40000 ALTER TABLE `initiatives_has_besoins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `initiatives_has_categories_intermediaires`
--

DROP TABLE IF EXISTS `initiatives_has_categories_intermediaires`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `initiatives_has_categories_intermediaires` (
  `initiatives_id` int(11) DEFAULT NULL,
  `categories_intermediaires_id` int(11) DEFAULT NULL,
  KEY `initiatives_id` (`initiatives_id`),
  KEY `categories_intermediaires_id` (`categories_intermediaires_id`),
  CONSTRAINT `initiatives_has_categories_intermediaires_ibfk_1` FOREIGN KEY (`initiatives_id`) REFERENCES `initiatives` (`id`) ON DELETE CASCADE,
  CONSTRAINT `initiatives_has_categories_intermediaires_ibfk_2` FOREIGN KEY (`categories_intermediaires_id`) REFERENCES `categories_intermediaires` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `initiatives_has_categories_intermediaires`
--

LOCK TABLES `initiatives_has_categories_intermediaires` WRITE;
/*!40000 ALTER TABLE `initiatives_has_categories_intermediaires` DISABLE KEYS */;
/*!40000 ALTER TABLE `initiatives_has_categories_intermediaires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `initiatives_has_categories_objets`
--

DROP TABLE IF EXISTS `initiatives_has_categories_objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `initiatives_has_categories_objets` (
  `initiatives_id` int(11) DEFAULT NULL,
  `categories_objets_id` int(11) DEFAULT NULL,
  KEY `initiatives_id` (`initiatives_id`),
  KEY `categories_objets_id` (`categories_objets_id`),
  CONSTRAINT `initiatives_has_categories_objets_ibfk_1` FOREIGN KEY (`initiatives_id`) REFERENCES `initiatives` (`id`) ON DELETE CASCADE,
  CONSTRAINT `initiatives_has_categories_objets_ibfk_2` FOREIGN KEY (`categories_objets_id`) REFERENCES `categories_objets` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `initiatives_has_categories_objets`
--

LOCK TABLES `initiatives_has_categories_objets` WRITE;
/*!40000 ALTER TABLE `initiatives_has_categories_objets` DISABLE KEYS */;
/*!40000 ALTER TABLE `initiatives_has_categories_objets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `initiatives_has_engagements`
--

DROP TABLE IF EXISTS `initiatives_has_engagements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `initiatives_has_engagements` (
  `initiatives_id` int(11) DEFAULT NULL,
  `engagements_id` int(11) DEFAULT NULL,
  KEY `initiatives_id` (`initiatives_id`),
  KEY `engagements_id` (`engagements_id`),
  CONSTRAINT `initiatives_has_engagements_ibfk_1` FOREIGN KEY (`initiatives_id`) REFERENCES `initiatives` (`id`) ON DELETE CASCADE,
  CONSTRAINT `initiatives_has_engagements_ibfk_2` FOREIGN KEY (`engagements_id`) REFERENCES `engagements` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `initiatives_has_engagements`
--

LOCK TABLES `initiatives_has_engagements` WRITE;
/*!40000 ALTER TABLE `initiatives_has_engagements` DISABLE KEYS */;
/*!40000 ALTER TABLE `initiatives_has_engagements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `initiatives_has_objets`
--

DROP TABLE IF EXISTS `initiatives_has_objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `initiatives_has_objets` (
  `initiatives_id` int(11) DEFAULT NULL,
  `objets_id` int(11) DEFAULT NULL,
  KEY `initiatives_id` (`initiatives_id`),
  KEY `objets_id` (`objets_id`),
  CONSTRAINT `initiatives_has_objets_ibfk_1` FOREIGN KEY (`initiatives_id`) REFERENCES `initiatives` (`id`) ON DELETE CASCADE,
  CONSTRAINT `initiatives_has_objets_ibfk_2` FOREIGN KEY (`objets_id`) REFERENCES `objets` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `initiatives_has_objets`
--

LOCK TABLES `initiatives_has_objets` WRITE;
/*!40000 ALTER TABLE `initiatives_has_objets` DISABLE KEYS */;
/*!40000 ALTER TABLE `initiatives_has_objets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `initiatives_has_types_activites`
--

DROP TABLE IF EXISTS `initiatives_has_types_activites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `initiatives_has_types_activites` (
  `initiatives_id` int(11) DEFAULT NULL,
  `types_activites_id` int(11) DEFAULT NULL,
  KEY `initiatives_id` (`initiatives_id`),
  KEY `types_activites_id` (`types_activites_id`),
  CONSTRAINT `initiatives_has_types_activites_ibfk_1` FOREIGN KEY (`initiatives_id`) REFERENCES `initiatives` (`id`) ON DELETE CASCADE,
  CONSTRAINT `initiatives_has_types_activites_ibfk_2` FOREIGN KEY (`types_activites_id`) REFERENCES `types_activites` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `initiatives_has_types_activites`
--

LOCK TABLES `initiatives_has_types_activites` WRITE;
/*!40000 ALTER TABLE `initiatives_has_types_activites` DISABLE KEYS */;
/*!40000 ALTER TABLE `initiatives_has_types_activites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `objets`
--

DROP TABLE IF EXISTS `objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `objets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `categories_intermediaires_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories_intermediaires_id` (`categories_intermediaires_id`),
  CONSTRAINT `objets_ibfk_1` FOREIGN KEY (`categories_intermediaires_id`) REFERENCES `categories_intermediaires` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objets`
--

LOCK TABLES `objets` WRITE;
/*!40000 ALTER TABLE `objets` DISABLE KEYS */;
/*!40000 ALTER TABLE `objets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types_activites`
--

DROP TABLE IF EXISTS `types_activites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `types_activites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `types_activites` varchar(100) DEFAULT NULL,
  `besoins_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `besoins_id` (`besoins_id`),
  CONSTRAINT `types_activites_ibfk_1` FOREIGN KEY (`besoins_id`) REFERENCES `besoins` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types_activites`
--

LOCK TABLES `types_activites` WRITE;
/*!40000 ALTER TABLE `types_activites` DISABLE KEYS */; 
/*!40000 ALTER TABLE `types_activites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userbase`
--

DROP TABLE IF EXISTS `userbase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userbase` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(40) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userbase`
--

LOCK TABLES `userbase` WRITE;
/*!40000 ALTER TABLE `userbase` DISABLE KEYS */;
INSERT INTO `userbase` VALUES (1,'free@labelleempreinte.fr','$2a$10$JMfoSBoDZw8P7rpdNAwW1ONgCPLzN/gWYi4OGBcHvaL8JEi8ZrNyW');
/*!40000 ALTER TABLE `userbase` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-03 14:42:07
