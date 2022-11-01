-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 31 oct. 2022 à 20:41
-- Version du serveur :  10.3.34-MariaDB-cll-lve
-- Version de PHP : 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `c1764789c_syrotnik`
--

-- --------------------------------------------------------

--
-- Structure de la table `author`
--

CREATE TABLE `author` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `author`
--

INSERT INTO `author` (`id`, `first_name`, `last_name`, `created_at`, `updated_at`) VALUES
(1, 'Adrien', 'Syrotnik', '2022-04-22 18:44:19', '2022-04-22 18:44:19'),
(2, 'Arthur', 'Joris', '2022-04-22 18:44:19', '2022-04-22 18:44:19');

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `game_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`, `game_id`, `created_at`, `updated_at`) VALUES
(1, 'ANY% (In Game)', 1, '2022-04-24 01:21:21', '2022-04-26 11:53:58'),
(3, 'ANY% to credit', 1, '2022-04-25 13:59:53', '2022-04-25 13:59:53'),
(4, 'ANY% (LiveSplit)', 1, '2022-04-26 11:54:48', '2022-04-26 11:54:48');

-- --------------------------------------------------------

--
-- Structure de la table `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `url_name` varchar(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `released_year` int(11) NOT NULL,
  `studio` varchar(255) NOT NULL,
  `platforms` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `game`
--

INSERT INTO `game` (`id`, `url_name`, `name`, `released_year`, `studio`, `platforms`, `created_at`, `updated_at`) VALUES
(1, 'emergency_exit', 'Emergency Exit', 2019, 'Aidia Info', 'PC', '2022-04-24 01:20:16', '2022-04-24 01:20:16');

-- --------------------------------------------------------

--
-- Structure de la table `game_author`
--

CREATE TABLE `game_author` (
  `id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `game_author`
--

INSERT INTO `game_author` (`id`, `game_id`, `author_id`) VALUES
(1, 1, 1),
(2, 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `player`
--

CREATE TABLE `player` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(100) NOT NULL,
  `ban_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `player`
--

INSERT INTO `player` (`id`, `pseudo`, `ban_at`, `created_at`, `updated_at`) VALUES
(1, 'Abyss', NULL, '2022-04-24 15:45:54', '2022-04-24 15:45:54'),
(2, 'JrsArthur', NULL, '2022-04-24 15:49:47', '2022-04-24 15:49:47'),
(4, 'SKeltM', NULL, '2022-04-24 21:16:07', '2022-04-24 21:16:07');

-- --------------------------------------------------------

--
-- Structure de la table `score`
--

CREATE TABLE `score` (
  `id` int(11) NOT NULL,
  `score` varchar(10) NOT NULL DEFAULT '',
  `link` varchar(500) DEFAULT NULL,
  `player_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `desc` text DEFAULT NULL,
  `invalid_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `score`
--

INSERT INTO `score` (`id`, `score`, `link`, `player_id`, `category_id`, `image`, `video`, `desc`, `invalid_at`, `created_at`, `updated_at`) VALUES
(1, '01:42:380', 'null', 1, 1, './uploads/1/image.png', NULL, 'null', NULL, '2022-04-24 15:45:54', '2022-04-24 15:45:54'),
(2, '02:29:020', 'null', 2, 1, './uploads/2/image.jpg', NULL, 'Je suis pas très ofrt, no offense', NULL, '2022-04-24 15:49:47', '2022-04-24 15:49:47'),
(4, '01:33:000', 'https://www.twitch.tv/videos/1463955417', 4, 1, './uploads/4/image.png', NULL, 'c moi wsh', NULL, '2022-04-24 21:16:07', '2022-04-24 21:16:07');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `game_id` (`game_id`);

--
-- Index pour la table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `url_name` (`url_name`);

--
-- Index pour la table `game_author`
--
ALTER TABLE `game_author`
  ADD PRIMARY KEY (`id`),
  ADD KEY `autor_id` (`author_id`) USING BTREE,
  ADD KEY `game_id` (`game_id`);

--
-- Index pour la table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pseudo` (`pseudo`);

--
-- Index pour la table `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`),
  ADD KEY `player` (`player_id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `author`
--
ALTER TABLE `author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `game_author`
--
ALTER TABLE `game_author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `player`
--
ALTER TABLE `player`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `score`
--
ALTER TABLE `score`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`);

--
-- Contraintes pour la table `game_author`
--
ALTER TABLE `game_author`
  ADD CONSTRAINT `game_author_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`),
  ADD CONSTRAINT `game_author_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  ADD CONSTRAINT `game_author_ibfk_3` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`);

--
-- Contraintes pour la table `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `score_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`),
  ADD CONSTRAINT `score_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
