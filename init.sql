-- phpMyAdmin SQL Dump
-- version 5.0.4deb2+deb11u1
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2023. Feb 20. 18:48
-- Kiszolgáló verziója: 10.5.18-MariaDB-0+deb11u1
-- PHP verzió: 7.3.33-7+0~20220929.100+debian11~1.gbpdb2e49

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `c40843zoomdesign`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `BANNER`
--

CREATE TABLE `BANNER` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `MOBILE` varchar(255) NOT NULL,
  `DESCRIPTION` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- A tábla adatainak kiíratása `BANNER`
--

INSERT INTO `BANNER` (`ID`, `NAME`, `MOBILE`, `DESCRIPTION`) VALUES
(7, '01asztali.webp', '01mobil.webp', 'SEO'),
(8, '02asztali.webp', '02mobil.webp', 'SEO'),
(9, '03asztali.webp', '03mobil.webp', 'SEO'),
(10, '04asztali.webp', '04mobil.webp', 'SEO'),
(11, '05asztali.webp', '05mobil.webp', 'SEO'),
(12, '06asztali.webp', '06mobil.webp', 'SEO'),
(13, '07asztali.webp', '07mobil.webp', 'SEO'),
(14, '08asztali.webp', '08mobil.webp', 'SEO');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `PROJECT`
--

CREATE TABLE `PROJECT` (
  `ID` int(11) NOT NULL,
  `HUN_NAME` varchar(255) NOT NULL,
  `EN_NAME` varchar(255) NOT NULL,
  `DESCRIPTION` text NOT NULL,
  `IMG` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- A tábla adatainak kiíratása `PROJECT`
--

INSERT INTO `PROJECT` (`ID`, `HUN_NAME`, `EN_NAME`, `DESCRIPTION`, `IMG`) VALUES
(1, 'Siófok, hotel terv', '', 'SEO', '1.webp'),
(2, 'Siófok, villapark terv', '', 'SEO', '2.webp'),
(3, 'Budapest, XI. kerület Polgármesteri hivatal', '', 'SEO', '3.webp'),
(4, 'Budapest, Testvérhegy Lakókert társasház', '', 'SEO', '4.webp'),
(5, 'Budapest, Harsánylejtő tarsasház', '', 'SEO', '5.webp'),
(6, 'Üröm, lakóház', '', 'SEO', '6.webp'),
(7, 'Budapest, Vérhalom utca exkluzív lakóépület', '', 'SEO', '7.webp'),
(8, 'Budapest, Turbán utca luxusház', '', 'SEO', '8.webp'),
(9, 'Budapest, Mezőkövesdi út lakó és irodaépületek', '', 'SEO', '9.webp'),
(10, 'Budapest, Otthon utca exkluzív lakóépület', '', 'SEO', '10.webp'),
(11, 'Zamárdi, apartmanház', '', 'SEO', '11.webp'),
(12, 'Nagykovácsi, exkluzív lakóépület', '', 'SEO', '12.webp'),
(13, 'Budapest, Óbuda Sportszálló terv', '', 'SEO', '13.webp'),
(14, 'Budapest Bakfű utca társasház', '', 'SEO', '14.webp'),
(15, 'Budapest, Óbuda Lakókert társasház', '', 'SEO', '15.webp'),
(16, 'Budapest, Harsánylejtő idősek otthona terv', '', 'SEO', '16.webp'),
(17, 'Újpest Szent István tér pályázat', '', 'SEO', '17.webp'),
(18, 'Budapest, XI. kerület közösségi ház terv', '', 'SEO', '18.webp');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `PROJECT_PART`
--

CREATE TABLE `PROJECT_PART` (
  `ID` int(11) NOT NULL,
  `PROJECT_ID` int(11) NOT NULL,
  `DESCRIPTION` text NOT NULL,
  `IMG` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- A tábla adatainak kiíratása `PROJECT_PART`
--

INSERT INTO `PROJECT_PART` (`ID`, `PROJECT_ID`, `DESCRIPTION`, `IMG`) VALUES
(10, 1, 'SEO', '01-SiofokHS.webp'),
(11, 1, 'SEO', '02-SiofokHS.webp'),
(12, 1, 'SEO', '03-SiofokHS.webp'),
(13, 1, 'SEO', '04-SiofokHS.webp'),
(14, 1, 'SEO', '05-SiofokHS.webp'),
(15, 1, 'SEO', '06-SiofokHS.webp'),
(16, 1, 'SEO', '07-SiofokHS.webp'),
(17, 1, 'SEO', '08-SiofokHS.webp'),
(18, 1, 'SEO', '09-SiofokHS.webp'),
(19, 1, 'SEO', '10-SiofokHS.webp'),
(20, 1, 'SEO', '11-SiofokHS.webp'),
(21, 1, 'SEO', '12-SiofokHS.webp'),
(22, 2, 'SEO', '01-Siofokvillapark.webp'),
(23, 2, 'SEO', '02-Siofokvillapark.webp'),
(24, 2, 'SEO', '03-Siofokvillapark.webp'),
(25, 2, 'SEO', '04-Siofokvillapark.webp'),
(26, 2, 'SEO', '05-Siofokvillapark.webp'),
(27, 2, 'SEO', '06-Siofokvillapark.webp'),
(28, 2, 'SEO', '07-Siofokvillapark.webp'),
(29, 2, 'SEO', '08-Siofokvillapark.webp'),
(30, 2, 'SEO', '09-Siofokvillapark.webp'),
(31, 2, 'SEO', '10-Siofokvillapark.webp'),
(32, 2, 'SEO', '11-Siofokvillapark.webp'),
(33, 2, 'SEO', '12-Siofokvillapark.webp'),
(34, 3, 'SEO', '01-Zsombolyai.webp'),
(35, 3, 'SEO', '02-Zsombolyai.webp'),
(36, 3, 'SEO', '03-Zsombolyai.webp'),
(37, 3, 'SEO', '04-Zsombolyai.webp'),
(38, 3, 'SEO', '05-Zsombolyai.webp'),
(40, 3, 'SEO', '06-Zsombolyai.webp'),
(42, 3, 'SEO', '07-Zsombolyai.webp'),
(44, 3, 'SEO', '08-Zsombolyai.webp'),
(46, 3, 'SEO', '09-Zsombolyai.webp'),
(48, 3, 'SEO', '10-Zsombolyai.webp'),
(50, 3, 'SEO', '11-Zsombolyai.webp'),
(52, 3, 'SEO', '12-Zsombolyai.webp'),
-- (54, 12, 'SEO', '13-Zsombolyai.webp'),
-- (56, 12, 'SEO', '14-Ribary.webp'),
(62, 4, 'SEO', '01-Testverhegyi-uj.webp'),
(64, 4, 'SEO', '02-Testverhegyi-uj.webp'),
(66, 4, 'SEO', '03-Testverhegyi-uj.webp'),
(68, 4, 'SEO', '04-Testverhegyi-uj.webp'),
(70, 4, 'SEO', '05-Testverhegyi-uj.webp'),
(72, 4, 'SEO', '06-Testverhegyi-uj.webp'),
(74, 4, 'SEO', '07-Testverhegyi-uj.webp'),
(76, 4, 'SEO', '08-Testverhegyi-uj.webp'),
-- (78, 4, 'SEO', '09-Kormoran.webp'),
-- (80, 4, 'SEO', '10-Kormoran.webp'),
-- (82, 4, 'SEO', '11-Kormoran.webp'),
-- (84, 4, 'SEO', '12-Kormoran.webp'),
-- (86, 4, 'SEO', '13-Kormoran.webp'),
-- (88, 4, 'SEO', '14-Kormoran.webp'),
(90, 5, 'SEO', '01-Harsanylejto161.webp'),
(91, 5, 'SEO', '02-Harsanylejto161.webp'),
(92, 5, 'SEO', '03-Harsanylejto161.webp'),
(93, 5, 'SEO', '04-Harsanylejto161.webp'),
(94, 5, 'SEO', '05-Harsanylejto161.webp'),
(95, 5, 'SEO', '06-Harsanylejto161.webp'),
(96, 5, 'SEO', '07-Harsanylejto161.webp'),
(97, 5, 'SEO', '08-Harsanylejto161.webp'),
(98, 5, 'SEO', '09-Harsanylejto161.webp'),
(99, 5, 'SEO', '10-Harsanylejto161.webp'),
(100, 5, 'SEO', '11-Harsanylejto161.webp'),
(101, 5, 'SEO', '12-Harsanylejto161.webp'),
-- (102, 14, 'SEO', '13-Martonhegy.webp'),
-- (103, 14, 'SEO', '14-Martonhegy.webp'),
-- (104, 14, 'SEO', '15-Martonhegy.webp'),
-- (105, 14, 'SEO', '16-Martonhegy.webp'),
-- (106, 14, 'SEO', '17-Martonhegy.webp'),
-- (107, 14, 'SEO', '18-Martonhegy.webp'),
(108, 6, 'SEO', '01-Urom.webp'),
(109, 6, 'SEO', '02-Urom.webp'),
(110, 6, 'SEO', '03-Urom.webp'),
(111, 6, 'SEO', '04-Urom.webp'),
(112, 6, 'SEO', '05-Urom.webp'),
(113, 6, 'SEO', '06-Urom.webp'),
(114, 6, 'SEO', '07-Urom.webp'),
(115, 6, 'SEO', '08-Urom.webp'),
(116, 6, 'SEO', '09-Urom.webp'),
(117, 6, 'SEO', '10-Urom.webp'),
(118, 6, 'SEO', '11-Urom.webp'),
(119, 6, 'SEO', '12-Urom.webp'),
-- (256, 27, 'SEO', '06-notebook.webp'),
(263, 7, 'SEO', '01-Verhalom.webp'),
(264, 7, 'SEO', '02-Verhalom.webp'),
(265, 7, 'SEO', '03-Verhalom.webp'),
(266, 7, 'SEO', '04-Verhalom.webp'),
(267, 7, 'SEO', '05-Verhalom.webp'),
(268, 7, 'SEO', '06-Verhalom.webp'),
(269, 7, 'SEO', '07-Verhalom.webp'),
(270, 7, 'SEO', '08-Verhalom.webp'),
(271, 7, 'SEO', '09-Verhalom.webp'),
(272, 7, 'SEO', '10-Verhalom.webp'),
(273, 7, 'SEO', '11-Verhalom.webp'),
(274, 7, 'SEO', '12-Verhalom.webp'),
(275, 8, 'SEO', '01-Turban.webp'),
(276, 8, 'SEO', '02-Turban.webp'),
(277, 8, 'SEO', '03-Turban.webp'),
(278, 8, 'SEO', '04-Turban.webp'),
(279, 8, 'SEO', '05-Turban.webp'),
(280, 8, 'SEO', '06-Turban.webp'),
(281, 8, 'SEO', '07-Turban.webp'),
(282, 8, 'SEO', '08-Turban.webp'),
(283, 8, 'SEO', '09-Turban.webp'),
(284, 8, 'SEO', '10-Turban.webp'),
(285, 8, 'SEO', '11-Turban.webp'),
(286, 8, 'SEO', '12-Turban.webp'),
(287, 9, 'SEO', '01-mezokovesdi.webp'),
(288, 9, 'SEO', '02-mezokovesdi.webp'),
(289, 9, 'SEO', '03-mezokovesdi.webp'),
(290, 9, 'SEO', '04-mezokovesdi.webp'),
(291, 9, 'SEO', '05-mezokovesdi.webp'),
(292, 9, 'SEO', '06-mezokovesdi.webp'),
(293, 9, 'SEO', '07-mezokovesdi.webp'),
(294, 9, 'SEO', '08-mezokovesdi.webp'),
(295, 9, 'SEO', '09-mezokovesdi.webp'),
-- (296, 9, 'SEO', '10-Gardonyi.webp'),
-- (297, 9, 'SEO', '11-Gardonyi.webp'),
(298, 10, 'SEO', '01-Otthon.webp'),
(299, 10, 'SEO', '02-Otthon.webp'),
(300, 10, 'SEO', '03-Otthon.webp'),
(301, 10, 'SEO', '04-Otthon.webp'),
(302, 10, 'SEO', '05-Otthon.webp'),
(303, 10, 'SEO', '06-Otthon.webp'),
(304, 10, 'SEO', '07-Otthon.webp'),
(305, 10, 'SEO', '08-Otthon.webp'),
(306, 10, 'SEO', '09-Otthon.webp'),
(307, 10, 'SEO', '10-Otthon.webp'),
(308, 10, 'SEO', '11-Otthon.webp'),
(309, 10, 'SEO', '12-Otthon.webp'),
(310, 11, 'SEO', '01-Zamardi.webp'),
(311, 11, 'SEO', '02-Zamardi.webp'),
(312, 11, 'SEO', '03-Zamardi.webp'),
(313, 11, 'SEO', '04-Zamardi.webp'),
(314, 11, 'SEO', '05-Zamardi.webp'),
(315, 11, 'SEO', '06-Zamardi.webp'),
(316, 11, 'SEO', '07-Zamardi.webp'),
(317, 11, 'SEO', '08-Zamardi.webp'),
(318, 11, 'SEO', '09-Zamardi.webp'),
(319, 11, 'SEO', '10-Zamardi.webp'),
(320, 11, 'SEO', '11-Zamardi.webp'),
(321, 11, 'SEO', '12-Zamardi.webp'),
(322, 12, 'SEO', '01-Nagykovacsi.webp'),
(323, 12, 'SEO', '02-Nagykovacsi.webp'),
(324, 12, 'SEO', '03-Nagykovacsi.webp'),
(325, 12, 'SEO', '04-Nagykovacsi.webp'),
(326, 12, 'SEO', '05-Nagykovacsi.webp'),
(327, 12, 'SEO', '06-Nagykovacsi.webp'),
(328, 12, 'SEO', '07-Nagykovacsi.webp'),
(329, 12, 'SEO', '08-Nagykovacsi.webp'),
(330, 12, 'SEO', '09-Nagykovacsi.webp'),
(331, 12, 'SEO', '10-Nagykovacsi.webp'),
(332, 12, 'SEO', '11-Nagykovacsi.webp'),
(333, 12, 'SEO', '12-Nagykovacsi.webp'),
(257, 12, 'SEO', '13-Nagykovacsi.webp'),
(258, 12, 'SEO', '14-Nagykovacsi.webp'),
(259, 12, 'SEO', '15-Nagykovacsi.webp'),
(260, 12, 'SEO', '16-Nagykovacsi.webp'),
(261, 12, 'SEO', '17-Nagykovacsi.webp'),
(262, 12, 'SEO', '18-Nagykovacsi.webp'),
(334, 13, 'SEO', '01-Sportszallo.webp'),
(335, 13, 'SEO', '02-Sportszallo.webp'),
(336, 13, 'SEO', '03-Sportszallo.webp'),
(337, 13, 'SEO', '04-Sportszallo.webp'),
(338, 13, 'SEO', '05-Sportszallo.webp'),
(339, 13, 'SEO', '06-Sportszallo.webp'),
(340, 13, 'SEO', '07-Sportszallo.webp'),
(341, 13, 'SEO', '08-Sportszallo.webp'),
-- (342, 22, 'SEO', '09-Siofokvillaparkkoncepcio.webp'),
-- (343, 22, 'SEO', '10-Siofokvillaparkkoncepcio.webp'),
-- (344, 22, 'SEO', '11-Siofokvillaparkkoncepcio.webp'),
-- (345, 22, 'SEO', '12-Siofokvillaparkkoncepcio.webp'),
(346, 14, 'SEO', '01-Bakfu.webp'),
(347, 14, 'SEO', '02-Bakfu.webp'),
(348, 14, 'SEO', '03-Bakfu.webp'),
(349, 14, 'SEO', '04-Bakfu.webp'),
(350, 14, 'SEO', '05-Bakfu.webp'),
(351, 14, 'SEO', '06-Bakfu.webp'),
(352, 14, 'SEO', '07-Bakfu.webp'),
(353, 14, 'SEO', '08-Bakfu.webp'),
(354, 14, 'SEO', '09-Bakfu.webp'),
(355, 14, 'SEO', '10-Bakfu.webp'),
(356, 14, 'SEO', '11-Bakfu.webp'),
(357, 14, 'SEO', '12-Bakfu.webp'),
(358, 15, 'SEO', '01-Obudalakokert.webp'),
(359, 15, 'SEO', '02-Obudalakokert.webp'),
(360, 15, 'SEO', '03-Obudalakokert.webp'),
(361, 15, 'SEO', '04-Obudalakokert.webp'),
(362, 15, 'SEO', '05-Obudalakokert.webp'),
(363, 15, 'SEO', '06-Obudalakokert.webp'),
(364, 15, 'SEO', '07-Obudalakokert.webp'),
(365, 15, 'SEO', '08-Obudalakokert.webp'),
(366, 15, 'SEO', '09-Obudalakokert.webp'),
(367, 15, 'SEO', '10-Obudalakokert.webp'),
(368, 15, 'SEO', '11-Obudalakokert.webp'),
(369, 15, 'SEO', '12-Obudalakokert.webp'),
(370, 16, 'SEO', '01-Idosekotthona.webp'),
(371, 16, 'SEO', '02-Idosekotthona.webp'),
(372, 16, 'SEO', '03-Idosekotthona.webp'),
(373, 16, 'SEO', '04-Idosekotthona.webp'),
(374, 16, 'SEO', '05-Idosekotthona.webp'),
(375, 16, 'SEO', '06-Idosekotthona.webp'),
(376, 16, 'SEO', '07-Idosekotthona.webp'),
(377, 16, 'SEO', '08-Idosekotthona.webp'),
(378, 16, 'SEO', '09-Idosekotthona.webp'),
(379, 16, 'SEO', '10-Idosekotthona.webp'),
(380, 16, 'SEO', '11-Idosekotthona.webp'),
(381, 16, 'SEO', '12-Idosekotthona.webp'),
(382, 17, 'SEO', '01-Ujpestpalyazat.webp'),
(383, 17, 'SEO', '02-Ujpestpalyazat.webp'),
(384, 17, 'SEO', '03-Ujpestpalyazat.webp'),
(385, 17, 'SEO', '04-Ujpestpalyazat.webp'),
(386, 17, 'SEO', '05-Ujpestpalyazat.webp'),
(387, 17, 'SEO', '06-Ujpestpalyazat.webp'),
(388, 17, 'SEO', '07-Ujpestpalyazat.webp'),
(389, 17, 'SEO', '08-Ujpestpalyazat.webp'),
(390, 17, 'SEO', '09-Ujpestpalyazat.webp'),

(394, 18, 'SEO', '01-kozossegihaz.webp'),
(395, 18, 'SEO', '02-kozossegihaz.webp'),
(396, 18, 'SEO', '03-kozossegihaz.webp'),
(397, 18, 'SEO', '04-kozossegihaz.webp'),
(398, 18, 'SEO', '05-kozossegihaz.webp'),
(399, 18, 'SEO', '06-kozossegihaz.webp'),
(391, 18, 'SEO', '07-kozossegihaz.webp'),
(392, 18, 'SEO', '08-kozossegihaz.webp'),
(393, 18, 'SEO', '09-kozossegihaz.webp');
--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `BANNER`
--
ALTER TABLE `BANNER`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `PROJECT`
--
ALTER TABLE `PROJECT`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `PROJECT_PART`
--
ALTER TABLE `PROJECT_PART`
  ADD PRIMARY KEY (`ID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `BANNER`
--
ALTER TABLE `BANNER`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT a táblához `PROJECT`
--
ALTER TABLE `PROJECT`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT a táblához `PROJECT_PART`
--
ALTER TABLE `PROJECT_PART`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=406;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
