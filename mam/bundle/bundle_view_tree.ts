namespace $ {

	export class $mam_bundle_view_tree extends $mam_bundle {

		@ $mol_mem_key
		generated( slice: $mam_slice ) {
			const start = Date.now()

			const prefix = slice.prefix()

			const target = slice.pack().output().resolve( `${ prefix }.view.tree` )
			
			const files = [ ... slice.files() ].filter( file => /view.tree$/.test( file.name() ) )
			if( files.length === 0 ) return []
			
			target.text( files.map( file => file.text() ).join( '\n' ) )
			
			this.log( target , Date.now() - start )
			
			return [ target ]
		}

	}
	
}
