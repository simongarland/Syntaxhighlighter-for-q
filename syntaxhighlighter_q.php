<?php
/**
 * Plugin Name: SyntaxHighlighter Evolved: q Brush
 * Description: Adds support for the q language to the SyntaxHighlighter Evolved plugin.
 * Author: Simon Garland
 * Version: 1.0.0
 * Author URI: http://garland.ch
 */

// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action( 'init', 'syntaxhighlighter_q_regscript' );

// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_q_addlang' );

// Register the brush file with WordPress
function syntaxhighlighter_q_regscript() {
  wp_register_script( 'syntaxhighlighter-brush-q', plugins_url( 'shBrushq.js', __FILE__ ), array('syntaxhighlighter-core'), '1.2.5' );
}

// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_q_addlang( $brushes ) {
  $brushes['q'] = 'q';
  $brushes['kx'] = 'q';
  $brushes['kdb'] = 'q';

  return $brushes;
}

?>
