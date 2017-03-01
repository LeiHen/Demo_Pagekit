<?php return array (
  'application' => 
  array (
    'debug' => false,
  ),
  'database' => 
  array (
    'default' => 'mysql',
    'connections' => 
    array (
      'mysql' => 
      array (
        'host' => 'localhost',
        'user' => 'root',
        'password' => 'root',
        'dbname' => 'pagekit',
        'prefix' => 'pk_',
      ),
    ),
  ),
  'system' => 
  array (
    'secret' => '.NPjhRwCAb9JI5hoF9TOXSiopDJyfKKDgCoIEkRHCbyiZwtHlh0SJVu/DFsZpv7i',
  ),
  'system/cache' => 
  array (
    'caches' => 
    array (
      'cache' => 
      array (
        'storage' => 'auto',
      ),
    ),
    'nocache' => false,
  ),
  'system/finder' => 
  array (
    'storage' => '',
  ),
  'debug' => 
  array (
    'enabled' => false,
  ),
);