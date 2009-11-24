﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * Nazwa pliku: pl.js
 * 	Polish language file.
 * 
 * Author:
 * 		Penknife (penknife1@gmail.com)
 */
 
 var WUILang =
 {
 //all used
 kbs				: "kB/s",
 
 
 //Settings window
 
 General			: "Główne",
 Downloads			: "Pobieranie",
 Connection			: "Połączenie",
 BitTorrent			: "BitTorrent",
 Queueing			: "Kolejkowanie",
 Scheduler			: "Harmonogram",
 Advanced			: "Zaawansowane",
 Disk_Cache			: "Bufor dysku",
 Enable_Web_Interface : "Aktyny interfejs WWW",
 Authent			: "Uwierzytelnianie",
 Username			: "Użytkownik",
 Password			: "Hasło",
 Enable_Guest_acc	: "Włącz konto gościa o nazwie",
 Connectivity		: "Dostępność",
 Alt_list_port		: "Alternatywny port nasłuchu (domyślnie = port protokołu)",
 Rest_access		: "Zablokuj dostęp adresom IP (wielokrotne wpisy separuj za pomocą , )",
 User_Interface		: "Interfejs użytkownika",
 Confirm_del_torr	: "Potwierdzaj usunięcie torrentów",
 Update_GUI_every	: "Aktualizuj GUI co",
 ms					: "ms",
 Alt_list_bckgnd	: "Alternatywny kolor tła listy",
 Show_speed			: "Pokaż prędkość",
 Don_t				: "Nie pokazuj",
 In_status_bar		: "W pasku statusu",
 In_title_bar		: "W tytule",
 Show_cat_start		: "Pokaż kategorie na starcie",
 Virt_row_thres		: "Virtual Row Threshold",
 Show_det_start		: "Pokaż szczegóły na starcie",
 Restor_def			: "Przywróć domyślne",
 When_add_torrent	: "Po dodaniu torrentów",
 Dnt_start_down_auto: "Nie pobieraj automatycznie",
 Other_sett			: "Inne",
 Append_ut_incompl	: "Dodaj .!ut do nieukończonych plików",
 Prealloc_all_files	: "Zawsze rezerwuj miejsce",
 Prev_stnd_w_act_con: "Wyłącz stan wstrzymania, jeśli są aktywne torrenty",
 Listening_Port		: "Port nasłuchu",
 Port_f_incom_conns	: "Port połączeń przychodzących",
 Random_Port		: "Losowy port",
 Rnd_port_torr_start: "Wybieraj losowo port rTorrent przy każdym starcie",
 En_UPnP_mapp		: "Włącz mapowanie portów UPnP",
 Add_torr_mustdie_f	: "Dodaj rTorrent do wyjątków Zapory Windows (Win XP SP2 lub późniejsze)",
 Proxy_Server		: "Serwer proxy",
 Type				: "Typ",
 none				: "(brak)",
 Proxy				: "Proxy",
 Port				: "Port",
 Use_proxy_4_p2p_con: "Użyj serwera proxy dla połączeń P2P",
 Bandwidth_Limiting : "Ograniczenie prędkości",
 Global_max_upl		: "Max prędkość wysyłania",
 unlimited			: "Nielimitowana",
 Alt_down_r_downl	: "Zmień limit wysyłania, gdy nie pobierasz",
 Glob_max_downl		: "Max prędkość pobierania",
 Num_of_conn		: "Liczba połączeń",
 Glob_max_conn		: "Całkowita ilość połączeń",
 Max_conn_peer_torr	: "Liczba połączeń na torrent",
 Num_upl_slots		: "Liczba slotów wysyłania na torrent",
 Extra_ulslots		: "Otwórz dodatkowy slot, gdy prędkość wysyłania < 90%",
 Add_bittor_featrs	: "Dodatkowe funkcje BitTorrent",
 En_DHT_ntw			: "Włącz sieć DHT",
 Ask_scrape			: "Odpytaj tracker o statystyki",
 En_DHT_new_torrs	: "Włącz DTH dla nowych torrentów",
 Peer_exch			: "Wymiana Peerów",
 Ip_report_track	: "IP/Nazwa hosta wysyłana do trackera",
 Protocol_enc		: "Szyfrowanie",
 Outgoing			: "Wychodzące",
 Disabled			: "Wyłączone",
 Enabled			: "Włączone",
 Forced				: "Wymuszone",
 All_inc_legacy_conn: "Akceptuj nieszyfrowane połączenia",
 Queue_sett			: "Kolejkowanie",
 Max_n_act_torrs	: "Max liczba aktywnych zadań (wysyłania lub pobierania)",
 Max_num_act_downl	: "Max liczba pobierań",
 Seed_while			: "Udostępniaj dopóki [wartości domyślne]",
 Ratio_is			: "Ratio wynosi",
 or_time_is			: " % lub czas",
 Ignore				: "(Ignoruj)",
 nin_min			: "90 minut",
 two_h				: "2 godziny",
 three_h			: "3 godziny",
 four_h				: "4 godziny",
 five_h				: "5 godzin",
 six_h				: "6 godzin",
 seven_h			: "7 godzin",
 eight_h			: "8 godzin",
 nine_h				: "9 godzin",
 ten_h				: "10 godzin",
 twelve_h			: "12 godzin",
 sixteen_h			: "16 godzin",
 twenty_h			: "20 godzin",
 tw_four_h			: "24 godziny",
 thirty_h			: "30 godzin",
 thirty_six_h		: "36 godzin",
 forty_eight_h		: "48 godzin",
 sixty_h			: "60 godzin",
 sev_two_h			: "72 godziny",
 nin_six_h			: "96 godzin",
 Seed_prior			: "Ustaw wyższy priorytet udostępniania niż pobierania",
 When_torr_reach	: "Po wysłaniu określonej ilości danych przez zadanie",
 Limit_upl_rate		: "Ogranicz prędkość wysyłania do: [użyj 0, aby zatrzymać]",
 En_shedul			: "Włącz harmonogram",
 Shed_sett			: "Ustawienia harmonogramu",
 Lim_upl_rate		: "Limit wysyłania",
 Lim_dow_rate		: "Limit pobierania",
 Dis_DHT_when_t_off	: "Wyłącz DHT gdy wyłączony",
 Disc_cahe			: "Bufor dysku",
 Disc_cahe_bla_bla	: "Bufor dysku przechowuje w pamięci najcześciej używane dane dla ograniczenia liczby operacji zapisu/odczytu z dysku. rTorrent zarządza buforem automatycznie, jednak możesz zdefiniować własne ustawienia.",
 Overwr_d_cahe_au	: "Określ rozmiar bufora",
 MB					: "MB",
 Red_mem_usage		: "Ogranicz użycie pamięci przy braku potrzeb buforowania",
 Adv_cache_sett		: "Zaawansowane ustawienia buforowania",
 En_cach_disc		: "Włącz buforowanie zapisu",
 Wr_out_ever_2_min	: "Zapisz nieużywane bloki co 2 minuty",
 Wr_immed			: "Zapisz natychmiast zakończone fragmenty",
 En_cah_disc_read	: "Włącz buforowanie odczytu",
 Turn_off_w_read	: "Wyłącz buforowanie odczytu dla niskiej prędkości wysyłania",
 Rem_old_from_cahe	: "Usuń stare bloki z bufora",
 Increase_autom_cach: "Automatycznie zwiększ rozmiar bufora przy błędach",
 Advanced			: "Zaawansowane",
 Advanced_label		: "Opcje zaawansowane [UWAGA: Modyfikujesz na własne ryzyko!]",
 Cancel				: "Anuluj",
 uTorrent_settings	: "Ustawienia rTorrent",
 
// Main window
 Doesnt_support		: "ruTorrent nie obsługuje twojej przeglądarki.",
 Name				: "Nazwa",
 Status				: "Status",
 Size				: "Rozmiar",
 Done				: "Postęp",
 Downloaded			: "Pobrano",
 Uploaded			: "Wysłano",
 Ratio				: "Ratio",
 DL					: "Pobieranie",
 UL					: "Wysyłanie",
 ETA				: "Szacowane",
 Label				: "Etykieta",
 Peers				: "Peerów",
 Seeds				: "Seedów",
 Avail				: "Dost.",
 Remaining			: "Remaining",
 Priority			: "Priorytet",
 Download			: "Download",
 Upload				: "Upload",
 Not_torrent_file	: "Plik musi być plikem torrent.",
 Pausing			: "Pauza",
 Seeding			: "Udostępnianie",
 Downloading		: "Ściąganie",
 Checking			: "Sprawdzanie",
 Error				: "Błąd",
 Queued				: "Zakolejkowany",
 Finished			: "Ukończony",
 Stopped			: "Zatrzymany",
 Request_timed_out	: "The request to rTorrent has timed out.",
 
 Force_Start		: "Wymuszony Start",
 Start				: "Start",
 Pause				: "Pause",
 Stop				: "Stop",
 Force_recheck		: "Wymuszone sprawdzanie",
 New_label			: "Nowa Etykieta...",
 Remove_label		: "Usuń etykiete",
 Labels				: "Etykiety",
 Remove				: "Usuń",
 Delete_data		: "Usuń dane",
 Remove_and			: "Usuń...",
 Details			: "Szczegóły...",
 Properties			: "Właściwości...",
 of					: "z", 		//this two creates line 
 connected			: "połączonych",	//  XX of YY connected
 High_priority		: "High Priority",
 Normal_priority	: "Normal Priority",
 Low_priority		: "Low Priority",
 Dont_download		: "Don't Download",
 Shure_restore_UI	: "Are you sure that you want to restore the user interface?",
 Reloading			: "Odświeżanie...",
 Name				: "Nazwa",
 Date_				: "Dane",
 Files				: "Pliki",
 Logger				: "Dziennik",
 
 s					: "s",    // part of "kB/s"
 bytes				: "bytes",
 KB					: "kB",
 MB					: "MB",
 GB					: "GB",
 TB					: "TB",
 PB					: "PB",
 
 // main WND s
 Loading			: "Wczytywanie...",
 Torrent_file		: "Plik Torrent",
 Torrent_URL		: "Adres Torrent",
 Cookies			: "Ciasteczka",
 RSS_Downloader		: "Czytnik RSS",
 Torrent_properties	: " Właściwości Torrent",
 Trackers			: "Trackery",
 Max_down_rate		: "Limit pobierania",
 Max_upl_rate		: "Limit wysyłania",
 Bandwidth_sett		: "Ustawienia łącza",
 Number_ul_slots	: "Liczba slotów wysyłania",
 Override_default	: "Nadpisz domyślne ustawienia",
 Initial_seed		: "Super-Seeding",
 Enable_DHT			: "Włącz DHT",
 Peer_ex			: "Wymiana peerów",
 About				: "O...",
 Enter_label_prom	: "Enter the new label for the selected torrents",
 Remove_torrents	: "Usuń torrent(y)",
 Rem_torrents_prompt: "Do you really want to remove the selected torrent(s)?",
 All				: "Wszystkie",
 Active				: "Aktywne",
 Inactive			: "Nieaktywne",
 No_label			: "Bez etykiety",
 Transfer			: "Transfer",
 Time_el			: "Upłyneło",
 Remaining			: "Pozostało",
 Share_ratio		: "Ratio",
 Down_speed			: "Prędkość pobierania",
 Down_limit			: "Limit pobierania",
 Ul_speed			: "Prędkość wysyłania",
 Ul_limit			: "Limit wysyłania",
 Wasted				: "Odrzucono",
 Tracker			: "Tracker",
 Track_URL			: "Adres Trackera",
 Track_status		: "Status Trackera",
 Update_in			: "Aktualizacja za",
 DHT_status			: "Status DHT",
 Save_as			: "Zapisany jako",
 Tot_size			: "Rozmiar",
 Created_on			: "Utworzono",
 Comment			: "Komentarz",
 
 
 //buttons
 add_button			: "Dodaj plik",
 add_url			: "Dodaj adres",
 ok1				: "   OK   ",
 ok2				: "   OK   ",
 ok3				: "   OK   ",
 Cancel1			: " Anuluj ",
 Cancel2			: " Anuluj ",
 no1				: "   No   ",
 
 // in menu don't use utf8
 mnu_add			: "Dodaj Torrent...",
 mnu_remove			: "Usuń",
 mnu_start			: "Start",
 mnu_pause			: "Wstrzymaj",
 mnu_stop			: "Stop",
 mnu_rss			: "Czytnik RSS",
 mnu_settings		: "Ustawienia...",
 mnu_search			: "Wyszukaj...",
 mnu_lang			: "Język",
 
 //Other variables added by spide
 torrent_add			: "Dodaj Torrent", /*Caption of torrent add box*/
 time_w				: "w ", /*for x weeks*/
 time_d				: "d ", /*for x days remaining*/
 time_h				: "h ", /*for x hours remaining*/
 time_m				: "m ", /*for x minutes remaining*/
 time_s				: "s ", /*for x seconds remaining*/

 //Novik's addition
 Base_directory    		: "Directory",
 Number_Peers_min		: "Minimum number of peers",
 Number_Peers_max		: "Maximum number of peers",
 Tracker_Numwant		: "Wished number of peers",
 Number_Peers_For_Seeds_min	: "Minimum number of seeds",
 Number_Peers_For_Seeds_max	: "Maximum number of seeds",
 Enable_port_open		: "Open listening port",
 dht_port			: "UDP port to use for DHT",
 Ather_Limiting			: "Other limitations",
 Number_dl_slots		: "Number of download slots",
 Glob_max_memory		: "Maximum memory usage",
 Glob_max_files			: "Maximum number of open files",
 Glob_max_http			: "Maximum number of open http connections",
 Glob_max_sockets		: "Maximum number of open sockets",
 Ather_sett			: "Other",
 Directory_For_Dl		: "Default directory for downloads",
 Check_hash			: "Check hash after download",
 Hash				: "Hash",
 IsOpen				: "Open",
 DisableTracker			: "Disable",
 EnableTracker			: "Enable",
 ClientVersion			: "Client",
 Flags				: "Flags",
 ReqTimeout			: "Request timeout",
 GetTrackerMessage		: "Receive messages from tracker",
 Help				: "Help",
 PHPDoesnt_enabled		: "Your web server does not support PHP. Correct this and try again.",
 Speed				: "Speed",
 Dont_add_tname			: "Don't add torrent's name to directory", 
 Free_Disk_Space		: "Free disk space",
 badXMLRPCVersion		: "rTorrent is compiled with incorrect version of xmlrpc-c library, without i8 support. Version must be >= 1.11. Some functionality will be unavailable.",
 badLinkTorTorrent		: "Bad link to rTorrent. Check if it is really running. Check $scgi_port and $scgi_host settings in config.php and scgi_port in rTorrent configuration file.",
 badUploadsPath			: "Web server can't access torrents directory for read/write/execute. You can't add torrents through ruTorrent.",
 badSettingsPath		: "Web server can't access settings directory for read/write/execute. ruTorrent can't save own settings.",
 mnu_help			: "About...",
 badUploadsPath2		: "rTorrent's user can't access torrents directory for read/execute. You can't add torrents through ruTorrent.",
 View				: "View",
 AsList				: "as list",
 AsTree				: "as tree",
 Group				: "Group",
 SuperSeed			: "Super-seed",
 badTestPath			: "rTorrent's user can't access file ./test.sh for read/execute. ruTorrent will not work.",
 badSettingsPath2		: "rTorrent's user can't access settings directory for read/write/execute. ruTorrent will not work.",
 scrapeDownloaded		: "Downloaded",
 badSessionPath			: "Web server can't access rTorrent's session directory for read. ruTorrent will not work.",
 Total				: "Total",
 PCRENotFound			: "PHP module PCRE is not installed. ruTorrent will not work.",
 addTorrentSuccess		: "torrent is succesfully passed to rTorrent.",
 addTorrentFailed		: "Error: torrent is doesn't passed to rTorrent.",
 pnlState			: "State",
 newLabel			: "New Label",
 enterLabel			: "Enter Label"
 };
