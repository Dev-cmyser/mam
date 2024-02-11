namespace $ {

	export class $mam_bundle_index_html extends $mam_bundle {

		@ $mol_mem_key
		generated_for_pack( pack: $mam_package ) {
			const start = Date.now()
			
			const html = pack.dir().resolve( 'index.html' )
			const tree = pack.dir().resolve( 'index.xml.tree' )

			const res = pack.output().resolve( 'index.html' )

			if( tree.exists() ) {
				const xml_tree = this.$.$mol_tree2_from_string( tree.text() )
				const text = this.$.$mol_tree2_xml_to_text( xml_tree )
				const xml = this.$.$mol_tree2_text_to_string( text )
				res.text( xml )
			} else if( html.exists() ) {
				res.text( html.text() )
			}

			if( !res.exists() ) return []

			this.log( res, Date.now() - start )

			return [ res ]
		}

	}
	
}
